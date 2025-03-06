export default function validateFirstForm(value) {
  let errors = {};

  if (!value.sellerReg.name) {
    errors.sellerReg.name = " Name is required";
  }

  if (!value.sellerReg.email) {
    errors.sellerReg.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.sellerReg.email = "Email is invalid";
  }

  if (!value.sellerReg.number) {
    errors.sellerReg.number = "number is required";
  } else if (value.sellerReg.number < 10) {
    errors.number = "number should be 10 digit";
  } else if (!/^\d*$/.test(value.sellerReg.number)) {
    errors.sellerReg.number = "Charcter not allowed";
  }

  if (!value.sellerReg.password) {
    errors.sellerReg.password = "Password is required";
  }
  if (!value.sellerReg.confirmPassword) {
    errors.sellerReg.confirmPassword = " Confirm Password is required";
  } else if (value.password !== value.confirmPassword) {
    errors.sellerReg.confirmPassword =
      "confirm password do not match to password";
  }

  if(!value.businessDetails.businessName){
    errors.businessDetails.businessName = "Business name is required"
  }
  if(!value.businessDetails.enrollmentId || !value.businessDetails.gstnum){
    errors.businessDetails.businessName = "gst and Enrollment id is required"
  }
  if(!value.businessDetails.address){
    errors.businessDetails.address = "address is required"
  }
  if(!value.businessDetails.country){
    errors.businessDetails.country = "country is required"
  }
  if(!value.businessDetails.state){
    errors.businessDetails.state = "state is required"
  }
  if(!value.businessDetails.city){
    errors.businessDetails.city = "city is required"
  }
  if(!value.businessDetails.pincode){
    errors.businessDetails.pincode = "pincode is required"
  }
  if(!value.businessDetails.specialityProduct){
    errors.businessDetails.specialityProduct = "speciality Product is required"
  }
  if(!value.businessDetails.adharNum){
    errors.businessDetails.adharNum = "aadhar number is required"
  }
  if(!value.businessDetails.panNum){
    errors.businessDetails.panNum = "Pan card number is required"
  }
  if(!value.businessDetails.businessOwnerName){
    errors.businessDetails.businessOwnerName = "Business Owner name is required"
  }
  if(!value.businessDetails.pickAddress){
    errors.businessDetails.pickAddress = "pickup address is required"
  }
  if(!value.businessDetails.pickCountry){
    errors.businessDetails.pickCountry = "pickup Country is required"
  }
  if(!value.businessDetails.pickState){
    errors.businessDetails.pickState = "pickup State is required"
  }
  if(!value.businessDetails.pickPincode){
    errors.businessDetails.pickPincode = "pickup Pincode is required"
  }
  if(!value.businessDetails.pickCity){
    errors.businessDetails.pickCity = "pickup City is required"
  }
  if(!value.businessDetails.sellerTag){
    errors.businessDetails.sellerTag = "Seller tag is required"
  }
  if(!value.businessDetails.sellerType){
    errors.businessDetails.sellerType = "Seller Type is required"
  }
  if(!value.businessDetails.advBooking){
    errors.businessDetails.advBooking = "Select YES or NO if ypu are allowed to be advance booking"
  }
  if(!value.accountDetails.accountNum){
    errors.accountDetails.accountNum = "account number is required"
  }
  if(!value.accountDetails.ifscCode){
    errors.accountDetails.ifscCode = "ifsc code is required"
  }
  if(!value.accountDetails.bankName){
    errors.accountDetails.bankName = "bank name is required"
  }
  if(!value.accountDetails.bankBranchName){
    errors.accountDetails.bankBranchName = "bank branch name is required"
  }
  if(!value.accountDetails.accountHolderName){
    errors.accountDetails.accountHolderName = "account holder name is required"
  }

  return errors;
}
