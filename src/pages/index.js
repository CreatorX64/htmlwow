import Head from "next/head";
import { Element as ScrollTarget } from "react-scroll";

import { getTemplates } from "@/lib/templates";
import Navigation from "@/components/Navigation";
import Templates from "@/components/Templates";
import Hero from "@/components/Hero";
import AboutCard from "@/components/AboutCard";
import Footer from "@/components/Footer";

export const getStaticProps = () => {
  const templates = getTemplates();

  return {
    props: {
      templates
    }
  };
};

const HomePage = ({ templates }) => {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://www.htmlwow.com" />
        <title>HTMLWOW — HTML templates that make you go WOW</title>

        {/* Preload images (above the fold) */}
        <link
          rel="preload"
          href="/images/pattern-hero.jpg"
          type="image/jpeg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/wave-top.png"
          type="image/png"
          as="image"
        />

        {/* Preload fonts (above the fold) */}
        <link
          rel="preload"
          href="/fonts/modak-v18-latin-regular.woff2"
          type="font/woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/rubik-v20-latin-regular.woff2"
          type="font/woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/rubik-v20-latin-500.woff2"
          type="font/woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/rubik-v20-latin-700.woff2"
          type="font/woff2"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>

      <>
        <div className="bg-[url('/images/pattern-hero.jpg')] bg-cover bg-center">
          <Navigation />
          <Hero />

          {/* Wave decoration */}
          <div className="mt-auto h-[160px] bg-[url('/images/wave-top.png')] bg-cover bg-center"></div>
        </div>

        <main className="bg-slate-900 px-4 pt-20 pb-4 md:px-6 md:pb-8 md:pt-24 lg:px-10 lg:pb-16 lg:pt-32">
          <ScrollTarget name="templates">
            <Templates templates={templates} />
          </ScrollTarget>
        </main>

        {/* Wave decoration */}
        <div className="h-[105px] bg-[url('/images/wave-bottom.png')] bg-cover bg-center"></div>

        <div className="px-4 py-16 md:py-24 md:px-6 lg:py-36 lg:px-10">
          <h2 className="mb-8 text-center text-lg font-bold text-slate-50 md:mb-12 md:text-3xl">
            About this project
          </h2>

          <ScrollTarget name="about">
            <AboutCard />
          </ScrollTarget>
        </div>

        <Footer />
      </>
    </>
  );
};

export default HomePage;
