import React, { useState } from "react";
import "./Register.scss";
import Step from "../../component/steps/Step";
import Input from "../../component/inputs/Input";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import SelectInput from "../../component/selectInput/SelectInput";

function Register() {
  const stepLabels = ["Personal Details", "Business Details", "Bank Details"];
  const [step, setStep] = useState(2);
  const [idType, setIdType] = useState("gst");

  const optionValue = [
    {
      id: 1,
      value: "india",
    },
    {
      id: 2,
      value: "Uae",
    },
  ];
  return (
    <>
      <div class="register_parent parent">
        <div class="register_cont cont">
          <h2 class="logo">Lorem lipsum</h2>
          <Step totalSteps={3} currentStep={step} stepLabels={stepLabels} />

          {step === 1 && (
            <form action="" className="register_form">
              <div class="form-row">
                <Input label="Your Name" name="name" />
              </div>
              <div class="form-row">
                <Input label="Your Email" type="email" name="email" />
              </div>
              <div class="form-row-row num_row">
                <span className="lead">+91</span>
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
          )}
          {step === 2 && (
            <form action="" className="register_form">
              <div class="form-row">
                <Input label="Your Name" name="name" />
              </div>
              <div class="form-row-row">
                <div class="half_row" style={{ justifyContent: "flex-end" }}>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="gst"
                        control={<Radio />}
                        checked={idType === "gst"}
                        label="Gst Number"
                        onChange={() => setIdType("gst")}
                      />
                      <FormControlLabel
                        value="enid"
                        control={<Radio />}
                        checked={idType === "enid"}
                        label="Enrollment Id"
                        onChange={() => setIdType("enid")}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div class="half_row">
                  {idType === "gst" && (
                    <Input label="Gst Number" name="email" />
                  )}
                  {idType === "enid" && (
                    <Input label="Enrollment id" name="email" />
                  )}
                </div>
              </div>
              <div class="form-row-row">
                <div class="half_row">
                  <Input label="Aadhar Number" name="adharNum" />
                </div>
                <div class="half_row">
                  <Input label="Pan Number" name="panNum" />
                </div>
              </div>
              <div class="form-row">
                <Input label="Business Owner Name" name="businessOwnerName" />
              </div>
              <div class="form-row">
                <Input label="Address" name="address" />
              </div>
              <div class="form-row-row">
                <div class="half_row">
                  <SelectInput label="Country" optionValue={optionValue} />
                </div>
                <div class="half_row">
                  <SelectInput label="State" optionValue={optionValue} />
                </div>
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
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
