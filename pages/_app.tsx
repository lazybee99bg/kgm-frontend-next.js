import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "../styles/warning.scss";
import "../styles/careers.scss";
import "../styles/home.scss";
import "../styles/flat_icon.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

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
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
