import "./_app.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import PurchaseProvider from "../contexts/purchaseContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PurchaseProvider>
      <Component {...pageProps} />
    </PurchaseProvider>
  );
}

export default MyApp;
