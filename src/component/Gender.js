import React from 'react';
import { FormControl, RadioGroup, Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const Gender = ({ label, options, control, name, errors }) => {
  const addErrorIntoField = (errors) => errors ? { error: true } : { error: false };
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} aria-label={label} {...addErrorIntoField(errors[name])} row>
            {options.map(option => (
              <FormControlLabel key={option.value} value={option.value} control={<Radio  color="success"  />} label={option.label} />
            ))}
          </RadioGroup>
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
}

export default Gender;
