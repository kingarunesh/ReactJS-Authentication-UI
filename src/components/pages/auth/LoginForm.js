import React from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }} id="login-form" onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" />
        <TextField margin="normal" required fullWidth id="password" name="password" label="Password" type="password" />

        <Box textAlign="center">
          <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, px: 2 }}>
            Login
          </Button>
        </Box>
        <NavLink to="/">Forgot Password ?</NavLink>
      </Box>
    </>
  );
};

export default LoginForm;
