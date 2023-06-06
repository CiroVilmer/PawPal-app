import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AuthenticationTitle } from "./AuthPage";
import { api } from "~/utils/api";
import CreateAccount from "./createAccount";


const Home = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PawPal</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          
          <AuthenticationTitle/>
      

        </div>
      </main>


    </>
  );
};

export default Home;

