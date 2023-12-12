import Head from "next/head";
import "@/styles/globals.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@libs/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          content="width=device-width,initial-scale=1, user-scalable=no"
          name="viewport"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
