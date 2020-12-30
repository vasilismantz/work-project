import { Grid } from "@material-ui/core";
import { RegisterForm } from "@/components";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { REGISTER } from "@work-project/graphql";
import { useSnackbar } from "notistack";
import { isLoggedInVar } from "@/lib/graphql/cache";
import { withoutAuth } from "@/hocs";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [register, { loading }] = useMutation(REGISTER, {
    onCompleted: ({ register }) => {
      localStorage.setItem("token", register.token);
      localStorage.setItem("userId", register.me.id);
      enqueueSnackbar("Registered.", {
        variant: "success",
        autoHideDuration: 1500,
      });
      setTimeout(() => isLoggedInVar(true), 750);
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  const handleSubmit = ({ name, email, password }) =>
    register({
      variables: {
        addUserInput: {
          name,
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
          <RegisterForm pending={loading} onSubmit={handleSubmit} />
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default withoutAuth(Register);
