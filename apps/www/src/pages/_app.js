import "../styles/globals.css";
import { withApollo } from "@/hocs";
import { SnackbarProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function MyApp({ Component, pageProps }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </MuiPickersUtilsProvider>
  );
}

export default withApollo(MyApp);
