import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import multer from "multer";

import { redisClient, isRedisConnected } from "./cache.js";
import { cacheMiddleware } from "./middleware.js";

const app = express();
const PORT = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vs", { useNewUrlParser: true, useUnifiedTopology: true });

const VideoSchema = new mongoose.Schema({ title: String, filename: String });
const Video = mongoose.model("Video", VideoSchema);

app.use(express.json());

// Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, "videos");
        if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Upload Video Metadata
app.post("/upload", upload.single("video"), async (req, res) => {
    const { title } = req.body;

    if (!title || !req.file) {
        return res.status(400).json({ error: "Missing title or video file" });
    }

    const video = new Video({ title, filename: req.file.filename });
    await video.save();

    if (isRedisConnected) await redisClient.del("videoList");

    res.json({ message: "Video uploaded successfully" });
});

// 📌 API to Get All Videos
app.get("/videos", cacheMiddleware, async (req, res) => {
    try {
        const videos = await Video.find();
        if (isRedisConnected) await redisClient.setEx(req.originalUrl, 3600, JSON.stringify(videos)); // Cache for 1 hour
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: "Error fetching videos" });
    }
});

// Stream Video
app.get("/video/:filename", (req, res) => {
    const videoPath = path.join(__dirname, "/videos", req.params.filename);
    const stat = fs.statSync(videoPath);

    res.writeHead(200, { 
        "Content-Type": "video/mp4", 
        "Content-Length": stat.size 
    });

    fs.createReadStream(videoPath).pipe(res);
});

// Health endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "Backend is running!" });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
