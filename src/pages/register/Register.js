import React, { useState } from "react";
import "./Register.scss";
import Step from "../../component/steps/Step";
import Input from "../../component/inputs/Input";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import SelectInput from "../../component/selectInput/SelectInput";
import MultiSelectInput from "../../component/multiselect/MultiSelectInput";
import { sellerApi } from "../../utils/Api";

import UseForm from "../../UseForm";
import validateFirstForm from "../../validate/ValidateRegisterPage";
import OTPInput from "react-otp-input";

function Register() {
  const stepLabels = ["Personal Details", "Business Details", "Bank Details"];
  const [step, setStep] = useState(1);
  const [idType, setIdType] = useState("gst");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [otpInput, setOtpInput] = useState(false);
  const [otp, setOtp] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const countryList = [
    { label: "India", value: "IN" },
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
  ];

  const [personName, setPersonName] = useState([]);
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  //  register 1st form

  const register = async () => {
    try {
      const response = await sellerApi.post("api/seller/registration", values);
      if (response.status === 200) {
        setDisabled(true);
        setOtpInput(true);
        // localStorage.setItem("sellerId", )
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formObj = {
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  };

  const { handleChange, handleSubmit, values, errors, setErros } = UseForm(
    formObj,
    validateFirstForm,
    register
  );

  // otp
  const otpValidate = async () => {
    try {
      const response = await sellerApi.post("api/seller/otpVerification", {
        sellerId: 1,
        otp,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="register_parent parent">
        <div class="register_cont cont">
          <h2 class="logo">Lorem lipsum</h2>
          <Step totalSteps={3} currentStep={step} stepLabels={stepLabels} />

          {step === 1 && (
            <form
              action=""
              className="register_form"
              onSubmit={disabled ? otpValidate : handleSubmit}
            >
              <div class="form-row">
                <Input
                  label="Your Name"
                  disabled={disabled}
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-warning">{errors.name}</small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Your Email"
                  value={values.email}
                  disabled={disabled}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-warning">{errors.email}</small>
                )}
              </div>
              <div class="form-row">
                <div class="form-row-row num_row">
                  <span className="lead">+91</span>
                  <Input
                    label="Contact Number"
                    disabled={disabled}
                    value={values.number}
                    name="number"
                    onChange={handleChange}
                  />
                </div>
                {errors.number && (
                  <small className="text-warning">{errors.number}</small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Password"
                  name="password"
                  value={values.password}
                  disabled={disabled}
                  onChange={handleChange}
                  password={true}
                />
                {errors.password && (
                  <small className="text-warning">{errors.password}</small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Confirm Password"
                  value={values.confirmPassword}
                  disabled={disabled}
                  onChange={handleChange}
                  name="confirmPassword"
                  password={true}
                />
                {errors.confirmPassword && (
                  <small className="text-warning">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>

              {otpInput && (
                <div class="form-row-row">
                  <label for=""> Enter Otp</label>
                  <OTPInput
                    numInputs={6}
                    value={otp}
                    onChange={setOtp}
                    renderSeparator={null}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                      width: "40px",
                      height: "40px",
                      fontSize: "20px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      textAlign: "center",
                      margin: "5px",
                    }}
                  />
                </div>
              )}
              <div class="form-row">
                <button type="submit" className="btn">
                  Next
                </button>
              </div>
            </form>
          )}

          {(step === 2 || step === 3) && (
            <form action="" className="register_form">
              {step === 2 && (
                <div class="step_two_form" style={{ width: "100%" }}>
                  <div class="form-row">
                    <Input label="Business Name" name="businessName" />
                  </div>
                  <div class="form-row-row">
                    <div
                      class="half_row"
                      style={{ justifyContent: "flex-end" }}
                    >
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
                    <Input
                      label="Business Owner Name"
                      name="businessOwnerName"
                    />
                  </div>
                  <div class="form-row">
                    <Input label="Address" name="address" />
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Country"
                        value={selectedCountry}
                        onChange={handleChange}
                        name="country"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                    <div class="half_row">
                      <SelectInput
                        label="State"
                        value={selectedCountry}
                        onChange={handleChange}
                        name="state"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="City"
                        value={selectedCountry}
                        onChange={handleChange}
                        name="city"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                    <div class="half_row">
                      <Input label="Pincode" name="pincode" />
                    </div>
                  </div>
                  <div class="form-row">
                    <Input label="Pickup Address" name="pickAddress" />
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        name="pickCountry"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                    <div class="half_row">
                      <SelectInput
                        label="State"
                        value={selectedCountry}
                        onChange={handleChange}
                        name="pickState"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="City"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        name="pickCity"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                    <div class="half_row">
                      <Input label="Pincode" name="pickPincode" />
                    </div>
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Your Product"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        name="specialityProduct"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                    <div class="half_row">
                      <SelectInput
                        label="Select Tag"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        name="sellerTag"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                    </div>
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <MultiSelectInput options={names} value={personName} />
                    </div>
                    <div class="half_row">
                      <div class="half_row">
                        <p style={{ fontSize: "14px" }}>
                          Allow for Advance booking
                        </p>
                      </div>
                      <div class="half_row">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="YES"
                              control={<Radio />}
                              checked="YES"
                              label="YES"
                            />
                            <FormControlLabel
                              value="NO"
                              control={<Radio />}
                              checked="NO"
                              label="NO"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <button className="btn">Next</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="step_two_form">
                  <div className="form-row">
                    <Input label="Bank name" name="bankName" />
                  </div>
                  <div className="form-row">
                    <Input label="Account number" name="accountNum" />
                  </div>

                  <div className="form-row">
                    <Input label="Ifsc code" name="ifscCode" />
                  </div>
                  <div className="form-row">
                    <Input label="Bank branch name" name="bankBranchName" />
                  </div>
                  <div className="form-row">
                    <Input
                      label="Account holder name"
                      name="accountHolderName"
                    />
                  </div>

                  <div class="form-row">
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
