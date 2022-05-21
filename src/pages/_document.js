import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" className="overflow-x-hidden">
      <Head>
        {/* Meta tags */}
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta
          name="description"
          content="HTML templates that make you go WOW."
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
