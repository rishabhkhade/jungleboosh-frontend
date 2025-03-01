import { TextField } from "@mui/material";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import "./Input.scss";
const Input = ({
  label,
  value,
  onChange,
  error,
  password,
  name,
  type = "text",
}) => {
  const [passwordType, setPasswordType] = useState(true);
  return (
    <>
      <div class="input">
        <TextField
          id="outlined-basic"
          label={label}
          name={name}
          value={value}
          variant="outlined"
          onChange={onChange}
          type={password ? (passwordType ? "password" : "text") : type}
          error={Boolean(error)}
          helperText={error ? "This field is required" : ""}
        />
        {password && (
          <span
            className="password-icon"
            onClick={() => setPasswordType(!passwordType)}
          >
            {!passwordType ? <IoEye /> : <IoMdEyeOff />}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
