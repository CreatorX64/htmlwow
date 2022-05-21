import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" className="overflow-x-hidden">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta
          name="description"
          content="HTML templates that make you go WOW."
        />
      </Head>
      <body className="min-h-screen overflow-x-hidden bg-slate-800 font-brand text-slate-100 scrollbar scrollbar-track-blue-100 scrollbar-thumb-blue-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
