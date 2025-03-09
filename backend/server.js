const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/netflix", { useNewUrlParser: true, useUnifiedTopology: true });

const VideoSchema = new mongoose.Schema({ title: String, filename: String });
const Video = mongoose.model("Video", VideoSchema);

app.use(express.json());

// Upload Video Metadata
app.post("/upload", async (req, res) => {
    const { title, filename } = req.body;
    const video = new Video({ title, filename });
    await video.save();
    res.json({ message: "Video uploaded successfully" });
});

// 📌 API to Get All Videos
app.get("/videos", async (req, res) => {
    try {
        const videos = await Video.find();
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
