import React from 'react'
import './AddProducts.scss'
import Step from '../../component/steps/Step'
import Card from '../../component/card/Card';
import Header_label from '../../component/header_label/Header_label';
import Input from '../../component/inputs/Input';

function AddProducts() {
  const stepLabels = ["Personal Details", "Add Products Details", "Add Extra Information "];


  return (


    <>
      <Card>
        <Header_label />
        <div class="parent parent-add-products">
          <div class="cont cont-add-products">
            <div class="top-add-products">
              <Step totalSteps={3} currentStep={1} stepLabels={stepLabels} />
            </div>
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
                <div class="btn">next</div>
              </form>
            </div>

            {/* step 2 */}
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
              <div class="btn">next</div>
            </div>


            {/* step 3 */}
            <div class="add-info-product">
              <div class="info-tabs">
                <span>Add Information</span>
                <span>Description</span>
              </div>

              <div class="info-boxes">
                <input type="text" />
                <input type="text" />
              </div>
            </div>

          </div>
        </div>
      </Card>
    </>
  )
}

export default AddProducts
