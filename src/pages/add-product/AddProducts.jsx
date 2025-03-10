import React, { useState } from 'react'
import './AddProducts.scss'
import Step from '../../component/steps/Step'
import Card from '../../component/card/Card';
import Header_label from '../../component/header_label/Header_label';
import Input from '../../component/inputs/Input';
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

function AddProducts() {
  const stepLabels = ["Personal Details", "Add Products Details", "Add Extra Information "];
  const [activeTab, setActiveTab] = useState("info")

  const [currentStep, setCurrentStep] = useState(1);

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

  return (


    <>
      <Card>
        <Header_label />
        <div class="parent parent-add-products">
          <div class="cont cont-add-products">
            <div class="top-add-products">
              <Step totalSteps={3}
                currentStep={currentStep}
                stepLabels={["Add Products Details", "Add Images", "Add Extra Information"]} />
            </div>

            {/* step 1 */}
            {
              currentStep === 1 && (
                <div class="bottom-add-products">
                  <form action="" className='product-add-form'>
                    <div class="form-row">
                      <Input
                        label="Title"
                      />
                      <Input
                        label="Price"
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
                  <div class="btn" onClick={handleNext}>next</div>
                  <div class="btn" onClick={handlePrev}>prev</div>

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
                  {activeTab === "info" ? (<>
                    <div class="info-boxes">
                      <input type="text" />
                      <input type="text" />
                      <span><FiMinus /></span>
                    </div>

                    <div class="info-boxes">
                      <input type="text" />
                      <input type="text" />
                      <span><FiMinus /></span>
                    </div>

                    <div class="info-boxes">
                      <input type="text" />
                      <input type="text" />
                      <span><FiMinus /></span>
                    </div>

                    <div className='add-other'>Add Other <span><MdAdd /></span></div>
                  </>
                  ) : (
                    <div class="description-box"></div>
                  )

                  }
                  <div class="btn " style={{ width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={handlePrev}>prev</div>
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
