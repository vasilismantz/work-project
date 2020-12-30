import React from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { isEmpty, map } from "lodash";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Box,
  Typography,
} from "@material-ui/core";
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
      </div>
      <Box mt={2}>
        <Typography variant="body2" align="center">
          Already have an account? <Link href="/login"> Log in </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;
