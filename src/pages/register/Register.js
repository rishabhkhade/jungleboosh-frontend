import React, { useContext, useEffect, useState } from "react";
import "./Register.scss";
import Step from "../../component/steps/Step";
import Input from "../../component/inputs/Input";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import SelectInput from "../../component/selectInput/SelectInput";
import MultiSelectInput from "../../component/multiselect/MultiSelectInput";
import UseForm from "../../UseForm";

import OTPInput from "react-otp-input";
import Loader from "../Loader/Loader";
import { sellerApi } from "../../utils/Api";
import validateRegFirstForm from "../../validate/ValidatefirstRegForm";

import validateRegForm from "../../validate/ValidateRegisterPage";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context";

function Register() {
  const { countries, stateFetch, state,city,cityFetch } = useContext(UserContext);

  const [values, setValues] = useState({
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
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const stepLabels = ["Personal Details", "Business Details", "Bank Details"];
  const [step, setStep] = useState(2);
  const [idType, setIdType] = useState("gst");
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [otp, setOtp] = useState("");

  const countryList = [
    { label: "India", value: "IN", id: 1 },
    { label: "United States", value: "US", id: 2 },
    { label: "Canada", value: "CA", id: 3 },
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
    const formData = localStorage.getItem("form_data");
    const parsedData = JSON.parse(formData);

    if (savedDisabled === "true") {
      setDisabled(true);

      setFirstForm({
        name: parsedData?.name || "",
        email: parsedData?.email || "",
        number: parsedData?.number || "",
        password: parsedData?.password || "",
        confirmPassword: parsedData?.confirmPassword || "",
      });
    }

    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setStep(parseInt(savedStep, 10));

      setValues({
        ...values,
        sellerReg: {
          name: parsedData?.name || "",
          email: parsedData?.email || "",
          number: parsedData?.number || "",
          password: parsedData?.password || "",
          confirmPassword: parsedData?.confirmPassword || "",
        },
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      businessDetails: {
        ...prevValues.businessDetails,
        [name]: value,
        advBooking: e.target.value,
      },
      accountDetails: {
        ...prevValues.accountDetails,
        [name]: value,
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

  const [firstFormErrors, setSecondFormErrors] = useState({});
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

    // Validate the form and update error state
    const newErrors = validateRegFirstForm(firstForm);
    setSecondFormErrors(newErrors);

    // If there are errors, do not proceed with the API call
    if (Object.keys(newErrors).length > 0) return;
    try {
      setLoader(true);
      const email = firstForm?.email;

      const response = await sellerApi.post("api/seller/sendOtp", { email });
      if (response.status) {
        setDisabled(true);
        localStorage.setItem("isDisabled", true);
        localStorage.setItem("form_data", JSON.stringify(firstForm));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // veerify otp

  const verifyOtp = async (e) => {
    try {
      e.preventDefault();
      if (otp.length !== 6) {
        alert("please enter 6 digit otp");
      }

      const response = await sellerApi.post("api/seller/otpVerification", {
        email: firstForm.email,
        otp: otp,
      });
      if (response.status) {
        setStep(2);
        localStorage.setItem("currentStep", "2");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  register api

  const register = async (e) => {
    try {
      e.preventDefault();

      const newErrors = validateRegForm(values);
      setErrors(newErrors);
      const response = await sellerApi.post(
        "api/seller/addSellerDetails",
        values
      );
      if (response.status === 201) {
        localStorage.clear(); // Clear existing session storage
        navigate("/login"); // Redirect to dashboard
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stepUpto = (e) => {
    e.preventDefault();
    const newErrors = validateRegForm(values); // Pass entire values object

    console.log("Validation Errors:", newErrors); // Debugging

    if (
      Object.keys(newErrors.businessDetails).length > 0 ||
      Object.keys(newErrors.accountDetails).length > 0
    ) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setStep(step + 1);
      localStorage.setItem("currentStep", step + 1);
    }
  };

  return (
    <>
      {loader && <Loader />}
      <div class="register_parent parent">
        <div class="register_cont cont">
          <h2 class="logo">Lorem lipsum</h2>
          <Step totalSteps={3} currentStep={step} stepLabels={stepLabels} />

          {step === 1 && (
            <form
              class="register_form"
              onSubmit={disabled ? verifyOtp : sendotp}
            >
              <div class="form-row">
                <Input
                  label="Your Name"
                  disabled={disabled}
                  value={firstForm.name}
                  name="name"
                  onChange={handleFirstFormChange}
                />
                {firstFormErrors?.name && (
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
                    maxLength={10}
                    name="number"
                    type="number"
                    onChange={(e) => {
                      const inputVal = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      if (inputVal.length <= 10) {
                        handleFirstFormChange(e);
                      }
                    }}
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
                  value={firstForm.password}
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
                  value={firstForm.confirmPassword}
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

          {(step === 2 || step === 3) && (
            <form
              action=""
              onSubmit={step === 2 ? stepUpto : register}
              className="register_form"
            >
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
                      {errors?.businessDetails?.enrollmentId ||
                        (errors?.businessDetails?.gstnum && (
                          <small className="text-warning">
                            {errors.businessDetails.gstnum}
                          </small>
                        ))}
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

                      {errors?.businessDetails?.adharNum && (
                        <small className="text-warning">
                          {errors.businessDetails.adharNum}
                        </small>
                      )}
                    </div>
                    <div class="half_row">
                      <Input
                        label="Pan Number"
                        name="panNum"
                        value={values.businessDetails.panNum}
                        onChange={handleChange}
                      />

                      {errors?.businessDetails?.panNum && (
                        <small className="text-warning">
                          {errors.businessDetails.panNum}
                        </small>
                      )}
                    </div>
                  </div>
                  <div class="form-row">
                    <Input
                      label="Business Owner Name"
                      name="businessOwnerName"
                      onChange={handleChange}
                      value={values.businessDetails.businessOwnerName}
                    />
                    {errors?.businessDetails?.businessOwnerName && (
                      <small className="text-warning">
                        {errors.businessDetails.businessOwnerName}
                      </small>
                    )}
                  </div>
                  <div class="form-row">
                    <Input
                      label="Address"
                      name="address"
                      value={values.businessDetails.address}
                      onChange={handleChange}
                    />

                    {errors?.businessDetails?.address && (
                      <small className="text-warning">
                        {errors.businessDetails.address}
                      </small>
                    )}
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Country"
                        value={values.businessDetails.country}
                        onChange={(e) => {
                          handleChange(e); // Update the form state
                          stateFetch(e.target.value); // Fetch states based on selected country
                        }}
                        name="country"
                      >
                        {countries.map((country) => (
                          <MenuItem
                            key={country.countryName}
                            value={country.id}
                          >
                            {country.countryName}
                          </MenuItem>
                        ))}
                      </SelectInput>

                      {errors?.businessDetails?.country && (
                        <small className="text-warning">
                          {errors.businessDetails.country}
                        </small>
                      )}
                    </div>
                    <div class="half_row">
                      <SelectInput
                        label="State"
                        value={values.businessDetails.state}
                        onChange={(e)=>{
                          handleChange(e)
                          cityFetch(e.target.value)
                        }}
                        name="state"
                      >
                        {state.map((country) => (
                          <MenuItem key={country.stateName} value={country.id}>
                            {country.stateName}
                          </MenuItem>
                        ))}
                      </SelectInput>

                      {errors?.businessDetails?.state && (
                        <small className="text-warning">
                          {errors.businessDetails.state}
                        </small>
                      )}
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
                        {city.map((country) => (
                          <MenuItem key={country.cityName} value={country.id}>
                            {country.cityName}
                          </MenuItem>
                        ))}
                      </SelectInput>

                      {errors?.businessDetails?.city && (
                        <small className="text-warning">
                          {errors.businessDetails.city}
                        </small>
                      )}
                    </div>
                    <div class="half_row">
                      <Input
                        label="Pincode"
                        value={values.businessDetails.pincode}
                        onChange={handleChange}
                        name="pincode"
                      />
                      {errors?.businessDetails?.pincode && (
                        <small className="text-warning">
                          {errors.businessDetails.pincode}
                        </small>
                      )}
                    </div>
                  </div>
                  <div class="form-row">
                    <Input
                      label="Pickup Address"
                      onChange={handleChange}
                      value={values.businessDetails.pickAddress}
                      name="pickAddress"
                    />

                    {errors?.businessDetails?.pickAddress && (
                      <small className="text-warning">
                        {errors.businessDetails.pickAddress}
                      </small>
                    )}
                  </div>
                  <div class="form-row-row">
                    <div class="half_row">
                      <SelectInput
                        label="Country"
                        value={values.businessDetails.pickCountry}
                        onChange={(e) => {
                          handleChange(e); // Update the form state
                          stateFetch(e.target.value); // Fetch states based on selected country
                        }}
                        name="pickCountry"
                      >
                        {countries.map((country) => (
                          <MenuItem
                            key={country.countryName}
                            value={country.id}
                          >
                            {country.countryName}
                          </MenuItem>
                        ))}
                      </SelectInput>

                      {errors?.businessDetails?.pickCountry && (
                        <small className="text-warning">
                          {errors.businessDetails.pickCountry}
                        </small>
                      )}
                    </div>
                    <div class="half_row">
                      <SelectInput
                        label="State"
                        value={values.businessDetails.pickState}
                        onChange={(e)=>{
                          handleChange(e)
                          cityFetch(e.target.value)
                        }}
                        name="pickState"
                      >
                        {state.map((country) => (
                          <MenuItem key={country.stateName} value={country.id}>
                            {country.stateName}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors?.businessDetails?.pickState && (
                        <small className="text-warning">
                          {errors.businessDetails.pickState}
                        </small>
                      )}
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
                       {city.map((country) => (
                          <MenuItem key={country.cityName} value={country.id}>
                            {country.cityName}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors?.businessDetails?.pickCity && (
                        <small className="text-warning">
                          {errors.businessDetails.pickCity}
                        </small>
                      )}
                    </div>
                    <div class="half_row">
                      <Input
                        label="Pincode"
                        value={values.businessDetails.pickPincode}
                        onChange={handleChange}
                        name="pickPincode"
                      />

                      {errors?.businessDetails?.pickPincode && (
                        <small className="text-warning">
                          {errors.businessDetails.pickPincode}
                        </small>
                      )}
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
                          <MenuItem key={country.value} value={country.id}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>

                      {errors?.businessDetails?.specialityProduct && (
                        <small className="text-warning">
                          {errors.businessDetails.specialityProduct}
                        </small>
                      )}
                    </div>
                    <div class="half_row">
                      <SelectInput
                        label="Select Tag"
                        value={values.businessDetails.sellerTag}
                        onChange={handleChange}
                        name="sellerTag"
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.value} value={country.id}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </SelectInput>
                      {errors?.businessDetails?.sellerTag && (
                        <small className="text-warning">
                          {errors.businessDetails.sellerTag}
                        </small>
                      )}
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
                      {errors?.businessDetails?.sellerType && (
                        <small className="text-warning">
                          {errors.businessDetails.sellerType}
                        </small>
                      )}
                    </div>
                    <div class="half_row" style={{ flexDirection: "row" }}>
                      <div class="half_row">
                        <p style={{ fontSize: "14px" }}>
                          Allow for Advance booking
                        </p>
                        {errors?.businessDetails?.advBooking && (
                          <small className="text-warning">
                            {errors.businessDetails.advBooking}
                          </small>
                        )}
                      </div>
                      <div className="half_row">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="advBooking"
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
