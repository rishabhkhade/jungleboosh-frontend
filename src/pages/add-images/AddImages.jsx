import React, { useState } from 'react'
import './AddImages.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import drag_drop from "../../assets/drag_drop.png"
import { sellerApi } from "../../utils/Api";
import UseForm from '../../UseForm';


function AddImages({ onClose, onUpload, sellerId }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file)); // Create preview URLs

    setSelectedFiles(files);
    setPreviewImages(fileUrls);

    // Update form values
    values((prev) => ({
      ...prev,
      image: files,
    }));
  };

  const handleUpload = () => {
    if (selectedImages.length > 0) {
      onUpload(selectedImages); // Pass selected images to parent component
      setSelectedImages([]); // Clear selected images
      onClose(); // Close popup
    }
  };

  const formObj = {
    image: [],
    sellerId: sellerId || 0,
  }

  const { handleChange, handleSubmit, setValues, values, errors, setErrors } = UseForm(
    formObj,
  );

  const addImages = async () => {
    try {
      const response = await sellerApi.post("api/seller/addGallery",
        values
      )
      console.log(response,"response");
      
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div className="popup-overlay">
        <div className="add-images-main" onClick={(e) => e.stopPropagation()}>
          <div class="dotted-outline">
            <div class="drag-img">
              <span><img src={drag_drop} alt="" /></span>
              <p>Drag & drop <span style={{ color: "var(--accent)" }}>images</span></p>
              <p>or <a href=""> browse files </a> on your computer</p>
              <input
                id="fileInput"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          {previewImages.length > 0 && (
            <div className="preview-container">
              {previewImages.map((image, index) => (
                <img key={index} src={image} alt={`Preview ${index}`} className="preview-image" />
              ))}
            </div>
          )}

          <div class="btn" onClick={addImages}>Add Image</div>

          {errors.image && <p className="error-text">{errors.image}</p>}

        </div>
        <div class="close-btn" onClick={onClose}>
          <span><IoIosCloseCircleOutline /></span>
        </div>
      </div>
    </>
  )
}

export default AddImages
