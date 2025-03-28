import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ title, src }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const [seeking, setSeeking] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            if (!seeking) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        video.addEventListener("timeupdate", updateProgress);
        return () => video.removeEventListener("timeupdate", updateProgress);
    }, [seeking]);

    // Seek bar interaction
    const handleSeek = (e) => {
        const video = videoRef.current;
        if (!video) return;

        const newTime = (e.target.value / 100) * video.duration;
        video.currentTime = newTime;
        setProgress(e.target.value);
    };

    // Handle seeking state
    const handleSeekStart = () => setSeeking(true);
    const handleSeekEnd = () => setSeeking(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            // video.play();
            setPlaying(true);
        } else {
            // video.pause();
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
            {/*             
            Commenting the seek for now
            <input
                type="range"
                className="progress-bar"
                min="0"
                max="100"
                value={progress}
                onMouseDown={handleSeekStart}
                onChange={handleSeek}
                onMouseUp={handleSeekEnd}
                onTouchEnd={handleSeekEnd}
            /> */}
            <button className="like-button" onClick={handleLike}>👍 {likes}</button>

        </div>
    );
};

export default VideoPlayer;
