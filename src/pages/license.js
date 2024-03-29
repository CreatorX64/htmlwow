import Head from "next/head";
import Script from "next/script";

import Navigation from "components/Navigation";
import Footer from "components/Footer";

const LicensePage = () => {
  return (
    <>
      <Head>
        <title>License Agreement | HTMLWOW</title>
        <meta property="og:url" content="https://www.htmlwow.com/license" />
      </Head>

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

      <div className="leading-loose">
        <Navigation />

        <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-24 sm:px-12 md:px-9 lg:px-10">
          <h1 className="mb-10 text-2xl font-bold md:mb-12 md:text-3xl lg:text-4xl">
            License Agreement
          </h1>

          <p>
            Upon using using web templates listed on this website and other
            marketplaces where HTMLWOW is publishing templates, you agree to
            this license. The terms are very simple. If you have any questions
            regarding your usage permissions of any template that you download,
            please feel free to email me at:{" "}
            <a href="mailto:creatorx64@gmail.com" className="link">
              CreatorX64@gmail.com
            </a>
          </p>

          <h2 className="mt-8 mb-4 text-lg font-bold sm:mb-6 sm:mt-10 md:mb-8 md:mt-12 md:text-2xl">
            Upon download, you&apos;re allowed to:
          </h2>

          <ul className="flex list-disc flex-col gap-3 pl-7">
            <li>
              Use the templates for any personal and/or commercial project.
            </li>
            <li>
              Edit/remix the templates in any shape or form to fit it for your
              brand/project.
            </li>
            <li>
              Give no attribution whatsoever to the creator of the template
              and/or to HTMLWOW.
            </li>
          </ul>

          <h2 className="mt-8 mb-4 text-lg font-bold sm:mb-6 sm:mt-10 md:mb-8 md:mt-12 md:text-2xl">
            You&apos;re not allowed to:
          </h2>

          <ul className="flex list-disc flex-col gap-3 pl-7">
            <li>Redistribute the templates in paid forms, in any platform.</li>
            <li>
              Claim authorship of a template in it&apos;s recognizable/base form
              without any modifications.
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LicensePage;
