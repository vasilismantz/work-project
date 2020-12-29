import { Grid } from "@material-ui/core";
import { LoginForm } from "@/components";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { LOGIN } from "@work-project/graphql";
import { useSnackbar } from "notistack";
import { isLoggedInVar } from "@/lib/graphql/cache";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      localStorage.setItem("userId", login.me.id);
      isLoggedInVar(true);
      router.push({
        pathname: "/",
      });
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  const handleSubmit = ({ email, password }) =>
    login({
      variables: {
        loginUserInput: {
          email,
          password,
        },
      },
    });

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
          <LoginForm pending={loading} onSubmit={handleSubmit} />
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
