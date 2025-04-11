import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import UploadPage from "./components/UploadPage";
import HomePage from "./components/HomePage";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="menu">
                <NavLink to="/" className="menu-link">Home</NavLink>
                <NavLink to="/upload" className="menu-link">Upload</NavLink>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<UploadPage />} />
            </Routes>
        </Router>
    );
};

export default App;