import React, { useEffect, useState } from "react";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`${BACKEND_URL}/videos`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div>
            <h1>Netflix Like Video streaming.</h1>
            {videos.map((video, index) => (
                <div key={index}>
                    <h3>{video.title}</h3>
                    <video width="640" height="360" controls>
                    <source src={`${BACKEND_URL}/video/${encodeURIComponent(video.filename)}`} type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    );
};

export default App;
