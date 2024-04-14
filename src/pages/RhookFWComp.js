
import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material"

import TextFields from "../component/TextFields";
import SelectFields from "../component/SelectFields";
import CheckboxFields from "../component/CheckboxFields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CircleUserRound } from 'lucide-react';
import Gender from "../component/Gender";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const pawdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// create schema validation
const schema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().required('Email is required').email(),
  mobile: yup.string().required('Mobile Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
  country: yup.string().required('Country is required'),
  password: yup.string().required('Password is required').matches(pawdRegExp, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
  privacy: yup.bool().oneOf([true], 'Field must be checked'),
});

const RhookFWComp = () => {
  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      country: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      Gender:'',
      privacy: false
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      // mt: '1rem',
      alignItems: 'center'
    }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <CircleUserRound />
      </Avatar>
      <Typography component='h1'>Sign up</Typography>

      {/* Form */}
      <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '35%', mt: '1rem' }}>
        <TextFields errors={errors} control={control} name='fullName' label='Full Name' />
        <TextFields errors={errors} control={control} name='email' label='Email' />
        <TextFields errors={errors} control={control} name='mobile' label='Mobile Phone' inputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          type: 'number'
        }} />
        <SelectFields errors={errors} control={control} name='country' label='Country' />
        <TextFields errors={errors} control={control} name='password' label='Password' />
        <TextFields errors={errors} control={control} name='confirmPassword' label='Confirm Password' />
        <Gender label="Gender" options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" }
    ]}  control={control} name="Gender" errors={errors}/>
        <CheckboxFields errors={errors} control={control} name='privacy' />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >Sign up</Button>
      </Box>
    </Box>
  )
}

export default RhookFWComp
