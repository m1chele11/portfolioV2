import React from 'react';
import './popup.css'; // Import CSS for Popup styles

const Popup = ({ project, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-container">
      <button className="close-btn" onClick={onClose}>X</button> {/* Close button */}
      <h2>{project.title}</h2>
      <div className="popup-content">
        <div className="popup-images">
          {project.screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
        <p className="description">{project.description}</p>
      </div>
    </div>
  </div>
);

export default Popup;






