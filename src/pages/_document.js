import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta
          name="description"
          content="HTML templates that make you go WOW."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
