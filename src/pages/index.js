import Head from "next/head";
import Layout from "@/components/layout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Hakan Güçlü — Frontend Developer</title>
      </Head>

      <Layout>
        <p>Welcome to my website</p>
      </Layout>
    </>
  );
};

export default HomePage;
