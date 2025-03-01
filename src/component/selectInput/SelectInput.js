import { Select, InputLabel, FormControl } from "@mui/material";
import React from "react";
import "./SelectInput.scss";

const SelectInput = (props) => {
  return (
    <>
      <div class="selectinput">
        <FormControl
          className="w-[100%]"
          error={props.error}
          required={props.required}
        >
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            disabled={props.disabled}
            onChange={props.onChange}
            value={props.value}
            
          >
            {props.children}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default SelectInput;
