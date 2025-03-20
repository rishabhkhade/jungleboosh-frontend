import React, { useEffect, useState } from 'react'
import './AddImages.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import drag_drop from "../../assets/drag_drop.png"
import { HeaderAuth, sellerApi } from "../../utils/Api";
import UseForm from '../../UseForm';


function AddImages({ onClose, onUpload, sellerId }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [images, setImages] = useState([]);





  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setSelectedFiles(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));

    // Update form values
    setValues((prev) => ({
      ...prev,
      image: files,
    }));
  };


  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
   addUploadImg(files) 
  };

  const addUploadImg = (files) => {
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 5)); // Limit to 4 images
  };



  const handleDragOver = (e) => e.preventDefault();


  const userId = Number(localStorage.getItem("id")) || null;



  const formObj = {
    image: [],
    sellerId: userId,
  }

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      sellerId: userId,
    }));
  }, [userId]);

  const { handleChange, handleSubmit, setValues, values, errors, setErrors } = UseForm(
    formObj,
  );

  const addImages = async () => {
    // if (selectedFiles.length === 0) {
    //   setErrors({ image: "Please select at least one image." });
    //   return;
    // }

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("image", file));
    formData.append("sellerId", values.sellerId);

    try {
      const response = await HeaderAuth.post("api/seller/addGallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Upload success:", response.data);

      // Get image URLs from API response
      const uploadedImageUrls = response.data.images; // Assuming API returns { images: ["url1", "url2"] }

      onUpload(uploadedImageUrls); // Pass real image URLs to SellerGallery
      setSelectedFiles([]);
      setPreviewImages([]);
      setSelectedImages([]);
      onClose();
    } catch (error) {
      console.log("Upload error:", error);
      setErrors({ image: "Upload failed. Try again." });
    }
  };

  return (
    <>
      <div className="popup-overlay">
        <div className="add-images-main" onClick={(e) => e.stopPropagation()}>
          <div class="dotted-outline">
            <div class="drag-img"
              onDrop={handleDrop}
              onDragOver={handleDragOver} >
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
