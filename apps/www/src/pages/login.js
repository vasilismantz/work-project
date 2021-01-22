import { LoginForm } from "@/components";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { LOGIN } from "@work-project/graphql";
import { useSnackbar } from "notistack";
import { isLoggedInVar } from "@/lib/graphql/cache";
import { withoutAuth } from "@/hocs";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      localStorage.setItem("userId", login.me.id);
      isLoggedInVar(true);
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
    <main className="login_page">
      <div className="login_page__frame">
        <div className="logn_page__logo"></div>
        <div className="login_page__content">
          <div className="login_page__form">
            <LoginForm pending={loading} onSubmit={handleSubmit} />
          </div>
          <div className="login_page__help_block">
            <p>
              Don't have an account?{" "}
              <Link href="/register">
                <a>Sign up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withoutAuth(Login);
