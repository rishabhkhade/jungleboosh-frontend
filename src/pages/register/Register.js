import React, { useEffect, useState } from "react";
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
import UseForm from "../../UseForm";
import validateFirstForm from "../../validate/ValidateRegisterPage";
import OTPInput from "react-otp-input";
import Loader from "../Loader/Loader";
import { sellerApi } from "../../utils/Api";
import validateRegFirstForm from "../../validate/ValidatefirstRegForm";

function Register() {
  const stepLabels = ["Personal Details", "Business Details", "Bank Details"];
  const [step, setStep] = useState(1);
  const [idType, setIdType] = useState("gst");
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [otp, setOtp] = useState("");

  const countryList = [
    { label: "India", value: "IN" },
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
  ];

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

  useEffect(() => {
    // Retrieve disabled state from localStorage
    const savedDisabled = localStorage.getItem("isDisabled");
    if (savedDisabled === "true") {
      setDisabled(true);
    }
  }, []);

  const formObj = {
    sellerReg: {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    },
    businessDetails: {
      businessName: "",
      enrollmentId: "",
      gstnum: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      specialityProduct: "",
      adharNum: "",
      panNum: "",
      businessOwnerName: "",
      pickAddress: "",
      pickCountry: "",
      pickState: "",
      pickCity: "",
      pickPincode: "",
      sellerTag: "",
      sellerType: [],
      advBooking: "",
    },
    accountDetails: {
      accountNum: "",
      ifscCode: "",
      bankName: "",
      bankBranchName: "",
      accountHolderName: "",
    },
  };

  // const [values, setValues] = useState({
  //   sellerReg: {
  //     name: "",
  //     email: "",
  //     number: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   businessDetails: {
  //     businessName: "",
  //     enrollmentId: "",
  //     gstnum: "",
  //     address: "",
  //     country: "",
  //     state: "",
  //     city: "",
  //     pincode: "",
  //     specialityProduct: "",
  //     adharNum: "",
  //     panNum: "",
  //     businessOwnerName: "",
  //     pickAddress: "",
  //     pickCountry: "",
  //     pickState: "",
  //     pickCity: "",
  //     pickPincode: "",
  //     sellerTag: "",
  //     sellerType: [],
  //     advBooking: "",
  //   },
  //   accountDetails: {
  //     accountNum: "",
  //     ifscCode: "",
  //     bankName: "",
  //     bankBranchName: "",
  //     accountHolderName: "",
  //   },
  // });
  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      businessDetails: {
        ...prevValues.businessDetails,
        [name]: value,
        advBooking: e.target.value,
      },
    }));
  };

  const handlelastFormChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      accountDetails: {
        ...prevValues.accountDetails,
        [name]: value,
      },
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      businessDetails: {
        ...(prevValues.businessDetails || {}),
        [name]: Array.isArray(value) ? value : [value], // Ensure value is always an array
      },
    }));
  };

  const [firstForm, setFirstForm] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [firstFormErrors, secondFormErrors] = useState({});
  const handleFirstFormChange = (e) => {
    const { name, value } = e.target;
    setFirstForm((prevValues) => ({
      ...prevValues,

      [name]: value,
    }));
  };
  // send otp

  const sendotp = async (e) => {
    e.preventDefault();
    secondFormErrors(validateRegFirstForm(firstForm));
    if (Object.keys(errors).length > 0) return; 
    try {
      const email = values?.sellerReg?.email;

      const response = await sellerApi.post("api/seller/sendOtp", { email });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const { handleSubmit, values, setValues, errors, setErrors } = UseForm(
    formObj,
    validateFirstForm
  );

  console.log(values);

  return (
    <>
      {loader && <Loader />}
      <div class="register_parent parent">
        <div class="register_cont cont">
          <h2 class="logo">Lorem lipsum</h2>
          <Step totalSteps={3} currentStep={step} stepLabels={stepLabels} />

          {step === 1 && (
            <form class="register_form" onSubmit={sendotp}>
              <div class="form-row">
                <Input
                  label="Your Name"
                  disabled={disabled}
                  value={firstForm.name}
                  name="name"
                  onChange={handleFirstFormChange}
                />
                {firstFormErrors.name && (
                  <small className="text-warning">{firstFormErrors.name}</small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Your Email"
                  value={firstForm.email}
                  disabled={disabled}
                  type="email"
                  name="email"
                  onChange={handleFirstFormChange}
                />
                {firstFormErrors.email && (
                  <small className="text-warning">
                    {firstFormErrors.email}
                  </small>
                )}
              </div>
              <div class="form-row">
                <div class="form-row-row num_row">
                  <span className="lead">+91</span>
                  <Input
                    label="Contact Number"
                    disabled={disabled}
                    value={firstForm.number}
                    name="number"
                    onChange={handleFirstFormChange}
                  />
                </div>
                {firstFormErrors.number && (
                  <small className="text-warning">
                    {firstFormErrors.number}
                  </small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Password"
                  name="password"
                  value={values.password}
                  disabled={disabled}
                  onChange={handleFirstFormChange}
                  password={true}
                />
                {firstFormErrors.password && (
                  <small className="text-warning">
                    {firstFormErrors.password}
                  </small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Confirm Password"
                  value={values.confirmPassword}
                  disabled={disabled}
                  onChange={handleFirstFormChange}
                  name="confirmPassword"
                  password={true}
                />
                {firstFormErrors.confirmPassword && (
                  <small className="text-warning">
                    {firstFormErrors.confirmPassword}
                  </small>
                )}
              </div>

              {disabled && (
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
                  {/* {countdown !== 0 && <p>{countdown}</p>}
                  {resendOtp && <div>resendOtp</div>} */}
                </div>
              )}
              <button className="btn" type="submit">
                Next
              </button>
            </form>
          )}

          {step === 2 && step === 3 && (
            <form action="" onSubmit={handleSubmit} className="register_form">
              {step === 2 && (
                <div class="step_two_form " style={{ width: "100%" }}>
                  <div class="form-row">
                    <Input
                      label="Business Name"
                      name="businessName"
                      value={values.businessDetails.businessName}
                      onChange={handleChange}
                    />
                    {errors?.businessDetails?.businessName && (
                      <small className="text-warning">
                        {errors.businessDetails.businessName}
                      </small>
                    )}
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
                        <Input
                          label="Gst Number"
                          value={values.businessDetails.gstnum}
                          name="gstnum"
                          onChange={handleChange}
                        />
                      )}
                      {idType === "enid" && (
                        <Input
                          label="Enrollment id"
                          value={values.businessDetails.enrollmentId}
                          name="enrollmentId"
                          onChange={handleChange}
                        />
                      )}
                    </div>
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <Input
                        label="Aadhar Number"
                        name="adharNum"
                        value={values.businessDetails.adharNum}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="half_row">
                      <Input
                        label="Pan Number"
                        name="panNum"
                        value={values.businessDetails.panNum}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <Input
                      label="Business Owner Name"
                      name="businessOwnerName"
                      onChange={handleChange}
                      value={values.businessDetails.businessOwnerName}
                    />
                  </div>
                  <div class="form-row">
                    <Input
                      label="Address"
                      name="address"
                      value={values.businessDetails.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Country"
                        value={values.businessDetails.country}
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
                        value={values.businessDetails.state}
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
                        value={values.businessDetails.city}
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
                      <Input
                        label="Pincode"
                        value={values.businessDetails.pincode}
                        onChange={handleChange}
                        name="pincode"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <Input
                      label="Pickup Address"
                      onChange={handleChange}
                      value={values.businessDetails.pickAddress}
                      name="pickAddress"
                    />
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Country"
                        value={values.businessDetails.pickCountry}
                        onChange={handleChange}
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
                        value={values.businessDetails.pickState}
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
                        value={values.businessDetails.pickCity}
                        onChange={handleChange}
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
                      <Input
                        label="Pincode"
                        value={values.businessDetails.pickPincode}
                        onChange={handleChange}
                        name="pickPincode"
                      />
                    </div>
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Your Product"
                        value={values.businessDetails.specialityProduct}
                        onChange={handleChange}
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
                        value={values.businessDetails.sellerTag}
                        onChange={handleChange}
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
                      <MultiSelectInput
                        options={names}
                        name="sellerType"
                        value={values.businessDetails.sellerType || []}
                        handleChange={handleMultiSelectChange}
                      />
                    </div>
                    <div class="half_row">
                      <div class="half_row">
                        <p style={{ fontSize: "14px" }}>
                          Allow for Advance booking
                        </p>
                      </div>
                      <div className="half_row">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={values.businessDetails.advBooking}
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="YES"
                              control={<Radio />}
                              label="YES"
                            />
                            <FormControlLabel
                              value="NO"
                              control={<Radio />}
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
                    <Input
                      label="Bank name"
                      onChange={handlelastFormChange}
                      name="bankName"
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      label="Account number"
                      onChange={handlelastFormChange}
                      name="accountNum"
                    />
                  </div>

                  <div className="form-row">
                    <Input
                      label="Ifsc code"
                      onChange={handlelastFormChange}
                      name="ifscCode"
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      label="Bank branch name"
                      onChange={handlelastFormChange}
                      name="bankBranchName"
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      label="Account holder name"
                      name="accountHolderName"
                      onChange={handlelastFormChange}
                    />
                  </div>

                  <div class="form-row">
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </div>
                </div>
              )}

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
