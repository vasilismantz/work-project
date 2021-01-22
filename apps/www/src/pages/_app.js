import "../styles/globals.css";
import { withApollo } from "@/hocs";
import { SnackbarProvider } from "notistack";
import { ProjectsProvider, SelectedProjectProvider } from "@/context";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <SelectedProjectProvider>
        <ProjectsProvider>
          <Component {...pageProps} />
        </ProjectsProvider>
      </SelectedProjectProvider>
    </SnackbarProvider>
  );
}

export default withApollo(MyApp);
