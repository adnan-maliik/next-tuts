import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next - Home Page</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </>
  );
}

export default MyApp;
