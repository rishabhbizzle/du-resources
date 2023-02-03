import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Router from "next/router";
import { TailSpin } from "react-loader-spinner";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-gray-900 min-h-screen p-10 items-center w-full">
          <TailSpin
            height="80"
            width="80"
            color="#6366F1"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              left: "0px",
              top: "0px",
              width: "100%",
              height: "100%",
              zIndex: "99",
              textAlign: "center",
              background: "none",
              opacity: "0.8",
            }}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
