import React, { useState } from "react";
import "./SellerGallery.scss";
import Card from "../../component/card/Card";
import Header_label from "../../component/header_label/Header_label";
import { MdAdd } from "react-icons/md";
import AddImages from "../../pages/add-images/AddImages.jsx";

function SellerGallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = async () => {
    if (selectedImages.length === 0) return;
  
    const formData = new FormData();
    formData.append("sellerId", "2"); // Replace with dynamic sellerId if needed
  
    selectedImages.forEach((image) => {
      formData.append("image", image); // Append multiple files
    });
  
    try {
      const response = await fetch("https://seller.jungleboosh.com/api/seller/addGallery", {
        method: "POST",
        body: formData,
      }); 
  
      const result = await response.json();
      if (response.ok) {
        alert("Images uploaded successfully!");
        onUpload(result.data); // Update gallery with new images from API response
      } else {
        alert("Upload failed: " + result.message);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images. Please try again.");
    }
  };
  

  return (
    <>
      <Card>
        <Header_label />
        <div className="sellergallery-parent parent">
          <div className="sellergallery-cont cont">
            <div className="tabs">
              <div className="tabs-labels">
                <span
                  className={activeTab === "photos" ? "active" : ""}
                  onClick={() => setActiveTab("photos")}
                >
                  Photos
                </span>
              </div>
              <div className={`underline ${activeTab}`}></div>
              <div className="btn" onClick={() => setIsPopupOpen(true)}>
                <span>
                  <MdAdd />
                </span>
                Upload Photos
              </div>
            </div>

            {/* Add Images Popup */}
            {isPopupOpen && <AddImages onClose={() => setIsPopupOpen(false)} onUpload={handleImageUpload} />}

            {/* Display Uploaded Images */}
            {activeTab === "photos" && (
              <div className="gallery-grid">
                {uploadedImages.length === 0 ? (
                  <p>No images uploaded</p>
                ) : (
                  uploadedImages.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <img src={image} alt={`Uploaded ${index}`} />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}

export default SellerGallery;
