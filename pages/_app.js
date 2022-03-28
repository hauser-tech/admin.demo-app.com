import "rsuite/dist/rsuite.min.css";
// import "@Styles/tailwind.css";
// import type { AppProps } from "next/app";
import Head from "next/head";
// import { QueryClient, QueryClientProvider } from "react-query";
// import AuthContextProvider from "context/AuthContext";
import Layout from "../components/Layout";

// const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Demo App</title>
      </Head>
      <div className="font-poppins">
        {/* <QueryClientProvider client={queryClient}> */}
        {/* <AuthContextProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </AuthContextProvider> */}
        {/* </QueryClientProvider> */}
      </div>
    </>
  );
}

export default MyApp;

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
