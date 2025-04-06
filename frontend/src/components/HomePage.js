import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

const HomePage = () => {
    const [videos, setVideos] = useState([]);
    const [errorMap, setErrorMap] = useState({});

    useEffect(() => {
        fetch(`${BACKEND_URL}/videos`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div className="container">
            <h1 className="title">🎬 Video Streaming</h1>
            <div className="video-grid">
                {videos.map((video, index) => (
                    <VideoPlayer 
                        key={index} 
                        title={video.title} 
                        src={`${BACKEND_URL}/video/${encodeURIComponent(video.filename)}`} 
                        onError={() => setErrorMap(prev => ({ ...prev, [index]: true }))}
                        hasError={!!errorMap[index]}
                        />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
