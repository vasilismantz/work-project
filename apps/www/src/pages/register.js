import { RegisterForm } from "@/components";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { REGISTER } from "@work-project/graphql";
import { useSnackbar } from "notistack";
import { isLoggedInVar } from "@/lib/graphql/cache";
import Link from "next/link";
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
    <main class="login_page">
      <div className="login_page__frame">
        <div className="logn_page__logo"></div>
        <div className="login_page__content">
          <div className="login_page__form">
            <RegisterForm />
          </div>
          <div className="login_page__help_block">
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withoutAuth(Register);
