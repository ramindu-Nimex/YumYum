import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import React from "react";

const initialValue = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h5" className="text-center">
        LogIn
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button
            sx={{ mt: 2, padding: "0.5rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            LogIn
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
