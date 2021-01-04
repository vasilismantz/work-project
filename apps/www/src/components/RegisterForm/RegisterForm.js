import React from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { ClearAll } from "@material-ui/icons";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, Email, LockRounded } from "@material-ui/icons";

const RegisterForm = ({ pending, onSubmit }) => {
  const {
    control,
    name,
    email,
    password,
    handleSubmit,
    errors,
    formState,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login_page__form_content">
        <Grid container justify="left">
          <Link href="/">
            <a className="form-logo">
              <ClearAll className="navbar-icon" />
              Todo List
            </a>
          </Link>
        </Grid>
        <Controller
          control={control}
          as={<TextField />}
          name="name"
          label="Name"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <Controller
          control={control}
          as={<TextField />}
          name="email"
          label="Email"
          type="email"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <Controller
          control={control}
          as={<TextField />}
          name="password"
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
        <Button
          color="primary"
          variant="contained"
          type="submit"
          // pending={pending}
        >
          Register
        </Button>
        <hr />
      </div>
    </form>
  );
};

export default RegisterForm;
