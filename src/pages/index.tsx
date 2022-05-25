import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "./components/Homepage/Header";
import { Navbar } from "./components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eliza</title>
        <meta name="title" content="Eliza" />
        <meta property="og:title" content="Eliza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
