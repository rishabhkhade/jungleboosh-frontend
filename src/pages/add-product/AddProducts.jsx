import React, { useState } from 'react'
import './AddProducts.scss'
import Step from '../../component/steps/Step'
import Card from '../../component/card/Card';
import Header_label from '../../component/header_label/Header_label';
import Input from '../../component/inputs/Input';
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import axios from 'axios';
import { handleFirstFormValidate } from "../../validate/validateAddProduct";

function AddProducts() {
  const stepLabels = ["Personal Details", "Add Products Details", "Add Extra Information "];
  const [activeTab, setActiveTab] = useState("info")

  const [currentStep, setCurrentStep] = useState(1);

  const [infoBoxes, setInfoBoxes] = useState(
    [
      { id: 1, value1: "", value2: "" }
    ]
  );

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
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  //add product
  const [productAdd, setProductAdd] = useState({
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
  });

  const [errors, setErrors] = useState({});

  // add product
  const handleProductAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.sellerApi("api/product/addProduct", productAdd)
    } catch (error) {
      console.log(error);
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
                      <Input
                        label="Title"

                      />
                      {errors.product_name && <span className="error">{errors.product_name}</span>}
                      <Input
                        label="Price"
                        error={errors.price}

                      />
                    </div>

                    <div class="form-row">
                      <Input
                        label="Unit"
                      />
                      <Input
                        label="Category"
                      />
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
                    <div class="drag-images">
                      <div class="drag-drop-images">
                        <a href="">drag & drop</a>
                      </div>
                      <div class="instructions-images">
                        <span>Instructions</span>
                      </div>
                    </div>
                    <div class="upload-images">
                      <div class="img-boxes"></div>
                      <div class="img-boxes"></div>
                      <div class="img-boxes"></div>
                      <div class="img-boxes"></div>
                    </div>
                    <div class="hero-images"></div>
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
                            error={errors.value1}
                          />
                          <input
                            type="text"
                            value={box.value2}
                            onChange={(e) => handleInputChange(box.id, "value2", e.target.value)}
                          />
                          {infoBoxes.length > 1 && (
                            <span onClick={() => removeInfoBox(box.id)}>
                              <FiMinus />
                            </span>
                          )}
                        </div>
                      ))}

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
