import { Grid } from "@material-ui/core";
import { SigninForm } from "@/components";

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
          <SigninForm />
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
