import React, { useState } from 'react'
import './AddProducts.scss'
import Step from '../../component/steps/Step'
import Card from '../../component/card/Card';
import Header_label from '../../component/header_label/Header_label';
import Input from '../../component/inputs/Input';
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { useDropzone } from 'react-dropzone';
import { IoIosClose } from "react-icons/io";

import validateAddProduct from "../../validate/validateAddProduct";
import UseForm from '../../UseForm';
import { sellerApi } from '../../utils/Api';
import SelectInput from '../../component/selectInput/SelectInput';
import { MenuItem } from '@mui/material';

function AddProducts() {
  const stepLabels = ["Personal Details", "Add Products Details", "Add Extra Information "];
  const [activeTab, setActiveTab] = useState("info")
  const [heroImage, setHeroImage] = useState(null)
  const [currentStep, setCurrentStep] = useState(3);
  const [images, setImages] = useState([]);

  const [infoBoxes, setInfoBoxes] = useState(
    [
      { id: 1, value1: "", value2: "" }
    ]
  );

  const categories = [
    "Electronics & Gadgets",
    "Fashion & Apparel",
    "Health & Beauty",
    "Home & Furniture",
    "Sports & Outdoors",
    "Automotive & Accessories",
    "Books & Stationery",
    "Toys & Games",
    "Groceries & Food",
    "Jewelry & Accessories",
    "Baby & Kids",
    "Pet Supplies",
    "Arts & Crafts",
    "Office & Business Supplies",
    "Music & Entertainment"
  ];

  const subcategories = [
    "Mobile Phones", "Laptops", "Tablets", "Smartwatches", "Cameras", "Audio Devices", "Gaming Consoles", "Accessories",
    "Men's Clothing", "Women's Clothing", "Shoes", "Bags", "Jewelry", "Watches", "Eyewear", "Traditional Wear",
    "Skincare", "Haircare", "Makeup", "Fragrances", "Personal Care", "Wellness", "Medical Supplies", "Supplements",
    "Furniture", "Kitchenware", "Home Decor", "Bedding", "Lighting", "Storage", "Bathroom Essentials", "Cleaning Supplies",
    "Fitness Equipment", "Outdoor Gear", "Cycling", "Camping", "Sportswear", "Yoga & Meditation", "Swimming", "Hiking",
    "Car Accessories", "Bike Accessories", "Car Care", "Helmets", "Tires", "Spare Parts", "Oils & Lubricants",
  ]

  const productCategories = [
    "Electronics",
    "Fashion",
    "Health & Beauty",
    "Home & Kitchen",
    "Sports & Outdoors",
    "Automotive",
    "Books & Stationery",
    "Toys & Games",
    "Groceries",
    "Jewelry & Watches",
    "Baby & Kids",
    "Pet Supplies",
    "Arts & Crafts",
  ];


  const units = [
    "Piece",
    "Kilogram (kg)",
    "Gram (g)",
    "Milligram (mg)",
    "Liter (L)",
    "Milliliter (mL)",
    "Meter (m)",
    "Centimeter (cm)",
    "Millimeter (mm)"
  ];


  const addInfoBox = () => {
    setInfoBoxes([...infoBoxes, { id: infoBoxes.length + 1, value1: "", value2: "" }]);
  };


  const removeInfoBox = (id) => {
    setInfoBoxes(infoBoxes.filter((box) => box.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setInfoBoxes(infoBoxes.map((box) => (box.id === id ? { ...box, [field]: value } : box)));
  };

  const handleNext = () => {
    const validationErrors = validateAddProduct(
      { images, heroImage },  // Pass latest state
      currentStep
    );

    setErrors(validationErrors);

    // Allow moving forward only if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setImages([...images, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  //add product

  const formObj = {
    sellerId: "",
    product_name: "",
    Product_price: "",
    Product_qantity: "",
    Category: "",
    Sub_category: "",
    Prd_category: "",
    Description: "",
    Heroimage: "",
    Add_info: []
  }


  const { handleChange, handleSubmit, values, errors, setErrors } = UseForm(
    formObj,
    validateAddProduct,
  );



  // add product
  const handleProductAdd = async (e) => {
    e.preventDefault();

    const validationErrors = validateAddProduct(values);
    setErrors(validationErrors);

    // Stop form submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    try {
      const response = await sellerApi.post("api/product/addProduct", values)
    } catch (error) {
      console.log(error);
    }
  }

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    let newImages = files.map((file) => URL.createObjectURL(file));

    if (newImages.length !== 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        images: "You must upload exactly 5 images, including a hero image.",
      }));
    } else {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors.images;
        return updatedErrors;
      });
    }

    if (!heroImage && newImages.length > 0) {
      setHeroImage(newImages[0]);
    }

    let updatedImages = [...images, ...newImages];

    // Ensure only 5 images are stored
    if (updatedImages.length > 5) {
      updatedImages = updatedImages.slice(0, 5);
    }

    setImages(updatedImages);

    // Set the first image as the Hero Image if it's not set
    if (!heroImage && updatedImages.length > 0) {
      setHeroImage(updatedImages[0]);
    }

    // Clear validation error
    setErrors((prevErrors) => ({ ...prevErrors, Heroimage: "" }));
  };

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    addImages(files);
  };

  // Prevent default behavior
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Add images to state
  const addImages = (files) => {
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 5)); // Limit to 4 images
  };

  //remove images
  const removeImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));

    // If removed image is the hero image, reset heroImage
    if (heroImage === images[indexToRemove]) {
      setHeroImage(null);
    }
  }

  return (
    <>
      <Card>
        <Header_label />
        <div class="parent parent-add-products">
          <div class="cont cont-add-products">

            <Step totalSteps={3}
              currentStep={currentStep}
              stepLabels={["Add Products Details", "Add Images", "Add Extra Information"]} />


            {/* step 1 */}
            {
              currentStep === 1 && (
                <div class="bottom-add-products">
                  <form action="" className='product-add-form'>
                    <div class="form-row">
                      <Input label="Title" name="product_name" onChange={handleChange} value={values.product_name} />
                      {errors.product_name && (
                        <small className="text-warning">{errors.product_name}</small>
                      )}
                      <Input label="Price" name="Product_price" onChange={handleChange} value={values.Product_price} />
                      {errors.Product_price && (
                        <small className="text-warning">{errors.Product_price}</small>
                      )}
                    </div>

                    <div class="form-row">
                      <SelectInput label="Unit" name="Product_qantity" onChange={handleChange} value={values.Product_qantity}>
                        {units.map((item, index) => (
                          <MenuItem key={index} value={item} >
                            {item}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors.Product_qantity && (
                        <small className="text-warning">{errors.Product_qantity}</small>
                      )}

                      <SelectInput label="Category" name="Category" onChange={handleChange} value={values.Category} >
                        {categories.map((item, index) => (
                          <MenuItem key={index} value={item} >
                            {item}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors.Category && (
                        <small className="text-warning">{errors.Category}</small>
                      )}
                    </div>

                    <div class="form-row">
                      <SelectInput label="Sub Category" name="Sub_category" onChange={handleChange} value={values.Sub_category}>
                        {subcategories.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors.Sub_category && (
                        <small className="text-warning">{errors.Sub_category}</small>
                      )}

                      <SelectInput
                        label="Product Category"
                        name="Prd_category"
                        onChange={handleChange}
                        value={values.Prd_category}>

                        {productCategories.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors.Prd_category && (
                        <small className="text-warning">{errors.Prd_category}</small>
                      )}
                    </div>
                    <div class="btn" onClick={handleNext}>next</div>
                  </form>
                </div>
              )
            }

            {/* step 2 */}
            {
              currentStep === 2 && (
                <div class="add-product-main">
                  <div class="add-product-images">
                    <div class="drag-images"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}>
                      <div class="drag-drop-images">
                        <label htmlFor="fileUpload" style={{ cursor: "pointer" }}>
                          Drag & Drop or Click to Upload
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          multiple
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>
                      <div class="instructions-images">
                        <span>Instructions</span>
                        <div class="instruction-points">
                          <p>1. Lorem ipsum dolor sit amet.</p>
                          <p>2. Lorem ipsum dolor sit amet.</p>
                          <p>3. Lorem ipsum dolor sit amet.</p>
                          <p>4. Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                      {errors.images && (
                        <small className="text-warning">{errors.images}</small>
                      )}
                    </div>

                    <div className="upload-images">
                      {images
                        .filter((img) => img !== heroImage) // Exclude the hero image from the list
                        .slice(0, 4) // Ensure only 4 images are shown
                        .map((img, index) => (
                          <div key={index} className="img-boxes">
                            <img
                              src={img}
                              alt={`uploaded-${index}`}
                              onClick={() => setHeroImage(img)} // Set hero image on click
                            />
                            <div className="close-btn" onClick={() => removeImage(index)}>
                              <IoIosClose />
                            </div>
                          </div>
                        ))}
                      {errors.heroImage && <small className="text-warning">{errors.heroImage}</small>}
                    </div>
                    <div className="hero-images">
                      {heroImage && <img src={heroImage} alt="Hero" width="200" />}
                    </div>
                  </div>
                  <div class="next-prev-btn">
                    <div class="btn" onClick={handlePrev}>prev</div>
                    <div class="btn" onClick={handleNext}>next</div>
                  </div>

                </div>
              )
            }


            {/* step 3 */}
            {
              currentStep === 3 && (
                <div class="add-info-product">
                  <div class="info-tabs">
                    <span className={activeTab === "info" ? "active" : ""}
                      onClick={() => setActiveTab("info")}
                    >Add Information</span>
                    <span className={activeTab === "description" ? "active" : ""}
                      onClick={() => setActiveTab("description")}
                    >Description</span>
                    <div class="add-info-product-line"></div>
                  </div>
                  {activeTab === "info" ? (
                    <>
                      {infoBoxes.map((box, index) => (
                        <div className="info-boxes" key={box.id}>
                          <input
                            type="text"
                            value={box.value1}
                            placeholder={index === 0 ? "e.g., Weight" : index === 1 ? "e.g., Color" : "e.g., Dimensions"}
                            onChange={(e) => handleInputChange(box.id, "value1", e.target.value)}

                          />

                          <input
                            type="text"
                            value={box.value2}
                            placeholder={index === 0 ? "e.g., 1kg" : index === 1 ? "e.g., Red" : "e.g., 10*45"}
                            onChange={(e) => handleInputChange(box.id, "value2", e.target.value)}
                          />

                          {infoBoxes.length > 1 && (
                            <span onClick={() => removeInfoBox(box.id)}>
                              <FiMinus />
                            </span>
                          )}

                        </div>

                      ))}
                      
                      {infoBoxes.length < 3 && errors.AddInfo && (
                        <small className="text-warning">{errors.AddInfo}</small>
                      )}

                      <div className="add-other" onClick={addInfoBox}>
                        Add Other <span><MdAdd /></span>
                      </div>
                    </>
                  ) : (
                    <textarea type="text" class="description-box"></textarea>
                  )

                  }
                  <div class="next-prev-btn-step3">
                    <div class="btn" onClick={handlePrev}>prev</div>
                    <div class="btn" onClick={handleNext}>next</div>
                  </div>
                </div>
              )
            }

          </div>
        </div>
      </Card>
    </>
  )
}

export default AddProducts
