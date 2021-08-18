import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Luis Miguel Angel Cabrera</h1>
            <p>Desarrollador Web | Auditor Especialista en Monitoreo Continuo</p>
        </div>
    )
}

export default Cover
