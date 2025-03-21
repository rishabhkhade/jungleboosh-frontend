import React, { useEffect, useState } from 'react'
import './AddImages.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import drag_drop from "../../assets/drag_drop.png"
import { HeaderAuth, sellerApi } from "../../utils/Api";
import UseForm from '../../UseForm';


function AddImages({ onClose, onUpload, sellerId }) {

  const handleDragOver = (e) => e.preventDefault();

  const userId = Number(localStorage.getItem("id")) || null;



  const formObj = {
    image: [],
    sellerId: userId,
  }

  const { handleChange, handleSubmit, values, errors, setErrors } = UseForm(
    formObj,
  );


  return (
    <>
      <div className="popup-overlay">
        <div className="add-images-main" onClick={(e) => e.stopPropagation()}>
          <div class="dotted-outline">
            <div class="drag-img">
              <span><img src={drag_drop} alt="" /></span>
              <label htmlFor='fileInput'>Drag & drop <span style={{ color: "var(--accent)" }}>images</span></label>
              <p>or <a href=""> browse files </a> on your computer</p>
            </div>
          </div>
          <div class="btn" >Add Image</div>
        </div>
        <div class="close-btn" onClick={onClose}>
          <span><IoIosCloseCircleOutline /></span>
        </div>
      </div>
    </>
  )
}

export default AddImages
