import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "../styles/warning.scss";
import "../styles/careers.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
