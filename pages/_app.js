import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/layout/Ui/Loader"
function MyApp({ Component, pageProps }) {
  const [loading,setLoading] = useState(false)
  Router.events.on('routeChangeStart',()=>setLoading(true))
  Router.events.on('routeChangeComplete',()=>setLoading(false))
  Router.events.on('routeChangeError',()=>setLoading(false))
  return (
    <>
      <Head>
        <title>Next - Home Page</title>
      </Head>
      {loading?(<Loader/>):(
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
