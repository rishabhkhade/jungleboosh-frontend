import React, { useState } from "react";
import "./AddImages.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import drag_drop from "../../assets/drag_drop.png";

function AddImages({ onClose, onUpload }) {
  const [selectedImages, setSelectedImages] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prev) => [...prev, ...files]); // Store selected images
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setSelectedImages((prev) => [...prev, ...files]);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="popup-overlay">
      <div className="add-images-main" onClick={(e) => e.stopPropagation()}>
        <div className="dotted-outline" onDrop={handleDrop} onDragOver={handleDragOver}>
          <div className="drag-img">
            <span>
              <img src={drag_drop} alt="Drag & Drop" />
            </span>
            <label htmlFor="fileInput">
              Drag & drop <span style={{ color: "var(--accent)" }}>images</span>
            </label>
            <p>
              or <a href="#" onClick={() => document.getElementById("fileInput").click()}>browse files</a> on your computer
            </p>
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {/* Display Selected Images */}
        {selectedImages.length > 0 && (
          <div className="image-preview">
            {selectedImages.map((image, index) => (
              <div key={index} className="preview-item">
                <img src={URL.createObjectURL(image)} alt="preview" />
              </div>
            ))}
          </div>
        )}

        <div className="btn" onClick={() => onUpload(selectedImages)}>Upload Images</div>
      </div>

      <div className="close-btn" onClick={onClose}>
        <span>
          <IoIosCloseCircleOutline />
        </span>
      </div>
    </div>
  );
}

export default AddImages;
