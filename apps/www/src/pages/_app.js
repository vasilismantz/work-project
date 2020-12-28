import "../styles/globals.css";
import { withApollo } from "@/hocs";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default withApollo(MyApp);
