import React, { useState } from "react";
import "./UploadPage.css"; // optional: you can use inline styles or Tailwind

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

const UploadPage = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setMessage("");
        setProgress(0);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!title.trim()) {
            setError("Video title is required.");
            return;
        }
        if (!file) {
            setError("Please choose a video file.");
            return;
        }

        const formData = new FormData();
        formData.append("video", file);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${BACKEND_URL}/upload`, true);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded / event.total) * 100);
                setProgress(percent);
            }
        };

        xhr.onload = async () => {
            if (xhr.status === 200) { }
        };

        xhr.onerror = () => {
            setError("❌ Network error during upload.");
        };

        xhr.send(formData);
    };

    return (
        <div className="upload-container">
            <h1 className="upload-title">📤 Upload Your Video</h1>

            <div className="upload-form">
                <input
                    type="text"
                    placeholder="Video Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="upload-input"
                />

                <div className="file-input-wrapper">
                    <input
                        type="file"
                        accept="video/*"
                        id="videoInput"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="upload-file"
                    />
                    {/* {file && <p className="file-name">🎥 Selected: {file.name}</p>} */}
                </div>

                {progress > 0 && (
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}>
                            <span className="progress-text">{progress}%</span>
                        </div>
                    </div>
                )}

                <button onClick={handleUpload} className="upload-button" disabled={uploading}>
                    {uploading ? "Uploading..." : "Upload Video"}
                </button>

                {message && <p className="upload-message">{message}</p>}
                {error && <p className="upload-error">{error}</p>}
            </div>
        </div>
    );
};

export default UploadPage;
