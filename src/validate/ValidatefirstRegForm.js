export default function validateRegFirstForm(value) {
    let errors = {};
  
    if (!value.name) {
      errors.name = "Name is required";
    }
  
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!value.number) {
      errors.number = "Number is required";
    } else if (value.number.length !== 10) {
      errors.number = "Number should be 10 digits";
    } else if (!/^\d*$/.test(value.number)) {
      errors.number = "Characters not allowed";
    }
  
    if (!value.password) {
      errors.password = "Password is required";
    }
  
    if (!value.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (value.password !== value.confirmPassword) {
      errors.confirmPassword = "Confirm password does not match password";
    }
  
    return errors;
  }