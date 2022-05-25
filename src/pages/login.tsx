import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "./components/Login/Form";
import { Navbar } from "./components/Navbar/Navbar";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="title" content="Login" />
        <meta property="og:title" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Form />
    </>
  );
};

export default Login;
