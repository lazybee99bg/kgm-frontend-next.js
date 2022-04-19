import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "../styles/warning.scss";
import "../styles/careers.scss";
import "../styles/home.scss";
import "../styles/flat_icon.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var _govaq = window._govaq || [];
    _govaq.push(['trackPageView']);
    _govaq.push(['enableLinkTracking']);
    (function () {
        _govaq.push(['setTrackerUrl', 'https://f-emc.ngsp.gov.vn/tracking']);
        _govaq.push(['setSiteId', '317']);
        var d = document,
            g = d.createElement('script'),
            s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript';
        g.async = true;
        g.defer = true;
        g.src = 'https://f-emc.ngsp.gov.vn/embed/gov-tracking.min.js';
        s.parentNode.insertBefore(g, s);
    })();`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
