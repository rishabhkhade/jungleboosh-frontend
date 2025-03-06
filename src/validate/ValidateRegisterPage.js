export default function validateFirstForm(value) {
  let errors = {};

  if (!value.name) {
    errors.name = " Name is required";
  }

  if (!value.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email is invalid";
  }

  if (!value.number) {
    errors.number = "number is required";
  } else if (value.number < 10) {
    errors.number = "number should be 10 digit";
  }

  if (!value.password) {
    errors.password = "Password is required";
  }
  if (!value.confirmPassword) {
    errors.confirmPassword = " Confirm Password is required";
  } else if (value.password !== value.confirmPassword) {
    errors.confirmPassword = "confirm password do not match to password";
  }
  return errors;
}
