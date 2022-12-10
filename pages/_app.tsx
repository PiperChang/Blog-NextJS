import type { AppProps } from "next/app";
import { atom, RecoilRoot, useRecoilState } from "recoil";
import Layout from "./../components/layout/Layout";
import { reset } from "../styles/global";
import { Global, css } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import MUIThemeProvider from "../styles/MUIThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <MUIThemeProvider>
          <Global
            styles={css`
            ${reset}
          `}
          />
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MUIThemeProvider>
      </RecoilRoot>
    </>
  );
}
