import { TextField } from "@mui/material";
import React from "react";
import "./Input.scss";
const Input = ({ label, value, onChange,error }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        value={value}
        variant="outlined"
        onChange={onChange}
        error={Boolean(error)} // Ensure error is a boolean
        helperText={error ? "This field is required" : ""} // Optional message
      />
    </>
  );
};

export default Input;
