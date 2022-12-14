import Head from "next/head";
import Hero from "components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>김창희 블로그</title>
        <meta name="description" content="만나서 반갑습니다. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
