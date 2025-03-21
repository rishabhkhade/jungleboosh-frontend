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


  const handleImageUpload = (newImages) => {
    setUploadedImages((prev) => [...prev, ...newImages]); // Append new images
    setIsPopupOpen(false); // Close popup after uploading
  };
  return (
    <>
      <Card>
        <Header_label />

        <div class="sellergallery-parent parent">
          <div class="sellergallery-cont cont">
            <div class="tabs">
              <div class="tabs-labels">
                <span
                  className={activeTab === "photos" ? "active" : ""}
                  onClick={() => setActiveTab("photos")}
                >
                  Photos
                </span>
              </div>
              <div class={`underline ${activeTab}`}></div>
              <div class="btn" onClick={() => setIsPopupOpen(true)}>
                <span>
                  <MdAdd />
                </span>
                Upload Photos
              </div>
            </div>


            {isPopupOpen && <AddImages onClose={() => setIsPopupOpen(true)} onUpload={handleImageUpload} />}


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
