import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="en" className="overflow-x-hidden">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JYTB71Z2N8"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JYTB71Z2N8');
          `}
        </Script>

        {/* Meta tags */}
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta
          name="description"
          content="Free HTML templates that make you go WOW."
        />

        {/* OG tags */}
        <meta property="og:title" content="HTMLWOW" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta
          property="og:description"
          content="Free HTML & Tailwind CSS templates for startups and developers in a hurry."
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="min-h-screen overflow-x-hidden bg-slate-800 font-brand text-slate-100 scrollbar scrollbar-track-blue-100 scrollbar-thumb-blue-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
