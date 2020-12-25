import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

const Login = () => {
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps-1400x1050.png"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="logo"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: "10" }}
        >
          <div />
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
            <div style={{ height: 20 }} />
            <Button>Already a member? Register</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
