import Head from "next/head";
import  LandingPage  from "./landingPage";



const Home = () => {

  return (
    <>
      <Head>
        <title>PawPal</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className="">
        <div className="">
          
          <LandingPage/>  

        </div>
      </main>


    </>
  );
};

export default Home;

