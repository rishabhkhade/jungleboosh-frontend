export default function validateRegForm(value) {
  let errors = {
    businessDetails: {},
    accountDetails: {},
  };

  if (!value.businessDetails.businessName) {
    errors.businessDetails = {
      ...errors.businessDetails,
      businessName: "Business name is required",
    };
  }
  if (!value.businessDetails.enrollmentId || !value.businessDetails.gstnum) {
    errors.businessDetails = {
      ...errors.businessDetails,
      gstnum: "gst or Enrollment id is required",
    };
   
  }
  if (!value.businessDetails.address) {
    errors.businessDetails ={
      ...errors.businessDetails,
      address : "address is required",
    }
  }
  if (!value.businessDetails.country) {
    errors.businessDetails ={
      ...errors.businessDetails,
      country : "country is required",
    }
   
  }
  if (!value.businessDetails.state) {
    errors.businessDetails ={
      ...errors.businessDetails,
      state : "state is required",
    }
   
  }
  if (!value.businessDetails.city) {
    errors.businessDetails ={
      ...errors.businessDetails,
      city : "city is required",
    }
 
  }
  if (!value.businessDetails.pincode) {
    errors.businessDetails ={
      ...errors.businessDetails,
      pincode : "pincode is required",
    }
   
  }
  if (!value.businessDetails.specialityProduct) {
    errors.businessDetails ={
      ...errors.businessDetails,
      specialityProduct : "speciality Product is required",
    }

  }
  if (!value.businessDetails.adharNum) {
    errors.businessDetails ={
      ...errors.businessDetails,
      adharNum : "aadhar number is required",
    }
 
  }else if (value.businessDetails.adharNum.length < 12) {
    errors.businessDetails ={
      ...errors.businessDetails,
      adharNum : "aadhar number must be 12 digits",
    }
  }
  
  if (!value.businessDetails.panNum) {
    errors.businessDetails ={
      ...errors.businessDetails,
      panNum : "Pan card number is required",
    }
    
  }
  if (!value.businessDetails.businessOwnerName) {
    errors.businessDetails ={
      ...errors.businessDetails,
      businessOwnerName : "Business Owner name is required",
    }
    
  }
  if (!value.businessDetails.pickAddress) {
    errors.businessDetails ={
      ...errors.businessDetails,
      pickAddress : "pickup address is required",
    }
  
  }
  if (!value.businessDetails.pickCountry) {
    errors.businessDetails ={
      ...errors.businessDetails,
      pickCountry : "pickup Country is required",
    }
   
  }
  if (!value.businessDetails.pickState) {
    errors.businessDetails ={
      ...errors.businessDetails,
      pickState : "pickup State is required",
    }

  }
  if (!value.businessDetails.pickPincode) {

    errors.businessDetails ={
      ...errors.businessDetails,
      pickPincode : "pickup Pincode is required",
    }

  }
  if (!value.businessDetails.pickCity) {
    errors.businessDetails ={
      ...errors.businessDetails,
      pickCity : "pickup City is required",
    }

  }
  if (!value.businessDetails.sellerTag) {
    errors.businessDetails ={
      ...errors.businessDetails,
      sellerTag : "Seller tag is required",
    }

  }
  if (!value.businessDetails.sellerType) {
    errors.businessDetails ={
      ...errors.businessDetails,
      sellerType : "Seller Type is required",
    }

  }
  if (!value.businessDetails.advBooking) {
    errors.businessDetails ={
      ...errors.businessDetails,
      advBooking : "Select YES or NO if ypu are allowed to be advance booking",
    }
   
  }

  // accoutn details
  if (!value.accountDetails) {
    errors.accountDetails = { general: "Account details are required" };
    return errors; // Stop execution if accountDetails is missing
  }
  if (!value.accountDetails.accountNum) {
    errors.accountDetails.accountNum = "account number is required";
  }
  if (!value.accountDetails.ifscCode) {
    errors.accountDetails.ifscCode = "ifsc code is required";
  }
  if (!value.accountDetails.bankName) {
    errors.accountDetails.bankName = "bank name is required";
  }
  if (!value.accountDetails.bankBranchName) {
    errors.accountDetails.bankBranchName = "bank branch name is required";
  }
  if (!value.accountDetails.accountHolderName) {
    errors.accountDetails.accountHolderName = "account holder name is required";
  }

  return errors;
}
