import React, { useState } from "react";
import "./SellerGallery.scss";
import Card from "../../component/card/Card";
import Header_label from "../../component/header_label/Header_label";
import { MdAdd } from "react-icons/md";

function SellerGallery() {
  const [activeTab, setActiveTab] = useState("photos");
  
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
                <span
                  className={activeTab === "videos" ? "active" : ""}
                  onClick={() => setActiveTab("videos")}
                >
                  Videos
                </span>
              </div>
              <div class={`underline ${activeTab}`}></div>
              <div class="btn">
                <span>
                  <MdAdd />
                </span>
                Upload Photos
              </div>
            </div>

            {activeTab === "photos" && (
              <div className="gallery-grid">
                {Array(9)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="gallery-item"></div>
                  ))}
              </div>
            )}

            {activeTab === "videos" && (
              <div class="videos-grid">
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="gallery-item"></div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}

export default SellerGallery;
