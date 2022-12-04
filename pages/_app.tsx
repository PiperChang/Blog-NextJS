import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BrowserRouter } from "react-dom";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    </>
  );
}
