import React from "react";
import { useForm } from "react-hook-form";
import { isEmpty, map } from "lodash";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

const SigninForm = ({ pending, onSubmit }) => {
  const { control, handleSubmit, errors, formState } = useForm();
  const { isSubmitting } = formState;

  return (
    <form
      onSubmit={handleSubmit(({ email, password }) =>
        onSubmit({ email, password })
      )}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 350,
          minWidth: 250,
        }}
      >
        <Grid container justify="center">
          <img src="/todo-logo.png" width="100" alt="Logo" />
        </Grid>
        <TextField
          label="Username"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          margin="normal"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
        />
        <div style={{ height: 20 }} />
        <Button color="primary" variant="contained">
          Log in
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
