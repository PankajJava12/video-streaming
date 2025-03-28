import React, { useRef, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ title, src }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const togglePlay = () => {
        debugger;
        if (videoRef.current.paused) {
            setPlaying(true);
        } else {
            setPlaying(false);
        }
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="video-card">
            <h3 className="video-title">{title}</h3>
            <div className="video-container" onClick={togglePlay}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <video ref={videoRef} className="video-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                {isHovered && (
                    <div className="play-overlay" onClick={togglePlay}>
                        {playing ? "⏸" : "▶"}
                    </div>
                )}
            </div>
            <button className="like-button" onClick={handleLike}>👍 {likes}</button>
        </div>
    );
};

export default VideoPlayer;
