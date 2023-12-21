import React from 'react';
import './App.css'; // Import your CSS file here

function UploadCard({ isOpen, onClose }) {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="upload-card">
          
          <h2>Upload Files</h2>
        
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
}

export default UploadCard;
