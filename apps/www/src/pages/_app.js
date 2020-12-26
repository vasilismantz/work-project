import "../styles/globals.css";
import { withApollo } from "@/hocs";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withApollo(MyApp);
