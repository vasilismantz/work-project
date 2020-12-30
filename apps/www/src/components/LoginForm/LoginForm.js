import React from "react";
import { Controller, useForm } from "react-hook-form";
import { isEmpty, map } from "lodash";
import Link from "next/link";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Box,
  Typography,
} from "@material-ui/core";
import { Email, LockRounded } from "@material-ui/icons";

const LoginForm = ({ pending, onSubmit }) => {
  const {
    control,
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
          Log in
        </Button>
      </div>
      <Box mt={2}>
        <Typography variant="body2" align="center">
          Don't have an account? <Link href="/register"> Register </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
