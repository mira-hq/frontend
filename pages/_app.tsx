import type { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;
