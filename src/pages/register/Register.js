import React from "react";
import "./Register.scss";
import Step from "../../component/steps/Step";
import Input from "../../component/inputs/Input";

function Register() {
  const stepLabels = ["Personal Details", "Business Details", "Bank Details"];
  return (
    <>
      <div class="register_parent parent">
        <div class="register_cont cont">
          <h2 class="logo">Lorem lipsum</h2>
          <Step totalSteps={3} currentStep={1} stepLabels={stepLabels} />

          <form action="" className="register_form">
            <div class="form-row">
              <Input label="Your Name" name="name" />
            </div>
            <div class="form-row">
              <Input label="Your Email" name="email" />
            </div>
            <div class="form-row">
              <span>+91</span>
              <Input label="Contact Number" name="number" />
            </div>
            <div class="form-row">
              <Input label="Password" name="password" password={true} />
            </div>
            <div class="form-row">
              <Input label="Confirm Password" password={true} />
            </div>
            <div class="form-row">
              <button type="submit" className="btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
