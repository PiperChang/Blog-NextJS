import type { AppProps } from "next/app";
import { atom, RecoilRoot, useRecoilState } from "recoil";
import Layout from "./../components/layout/Layout";
import 'styles/global.css'
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider attribute='class' enableSystem={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

async function getStaticProps() {

}