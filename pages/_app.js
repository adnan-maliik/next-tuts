import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout/layout";
import Card from "../components/Skeleton/Card";
import { useState } from "react";
import Router from "next/router";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    console.log("loading starte");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("loading finished");
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    console.log("error occured");
    setLoading(false);
  });
  return (
    <>
      <Head>
        <title>Next - Home Page</title>
      </Head>
      <Layout>
        {loading ? (
          [1, 2].map((e) => <Card key={e} />)
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}

export default MyApp;
