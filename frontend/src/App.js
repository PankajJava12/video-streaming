import React, { useEffect, useState } from "react";
import "./App.css"; // Import CSS file

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`${BACKEND_URL}/videos`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div className="container">
            <h1 className="title">🎬 Netflix-Like Video Streaming</h1>
            <div className="video-grid">
                {videos.map((video, index) => (
                    <div key={index} className="video-card">
                        <h3 className="video-title">{video.title}</h3>
                        <video className="video-player" controls>
                            <source src={`${BACKEND_URL}/video/${encodeURIComponent(video.filename)}`} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
