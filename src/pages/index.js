import Head from "next/head";
import { Element as ScrollTarget } from "react-scroll";

import Navigation from "@/components/navigation";
import { getTemplates } from "@/lib/templates";
import Templates from "@/components/templates";
import Hero from "@/components/hero";
import AboutCard from "@/components/about-card";

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
        <title>HTMLWOW — HTML templates that make you go WOW</title>
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-slate-800 font-brand text-slate-100">
        <div className="bg-[url('/pattern-hero.jpg')] bg-cover bg-center">
          <Navigation />
          <Hero />

          {/* Wave decoration */}
          <div className="mt-auto h-[160px] bg-[url('/wave-top.png')] bg-cover bg-center"></div>
        </div>

        <main className="bg-slate-900 px-4 pt-20 pb-4 md:px-6 md:pb-8 md:pt-24 lg:px-10 lg:pb-16 lg:pt-32">
          <ScrollTarget name="templates">
            <Templates templates={templates} />
          </ScrollTarget>
        </main>

        {/* Wave decoration */}
        <div className="h-[105px] bg-[url('/wave-bottom.png')] bg-cover bg-center"></div>

        <div className="px-4 py-16 md:py-24 md:px-6 lg:py-36 lg:px-10">
          <h2 className="mb-8 text-center text-lg font-bold text-slate-50 md:mb-12 md:text-3xl">
            About this project
          </h2>

          <ScrollTarget name="about">
            <AboutCard />
          </ScrollTarget>
        </div>

        {/* Footer */}
        <footer className="border-t-2 border-slate-900 pt-10 pb-28 md:pt-20 md:pb-36">
          <p className="text-center text-sm text-slate-400 md:text-base">
            Made with 💙 by{" "}
            <a
              href="https://twitter.com/CreatorX64"
              className="underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              @CreatorX64
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
