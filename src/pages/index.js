import Head from "next/head";
import { Element as ScrollTarget } from "react-scroll";
import { getTemplates } from "@/lib/templates";
import Navigation from "@/components/navigation";
import Templates from "@/components/templates";
import Hero from "@/components/hero";
import AboutCard from "@/components/about-card";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { useLoading } from "@/hooks/loading";

export const getStaticProps = () => {
  const templates = getTemplates();

  return {
    props: {
      templates
    }
  };
};

const HomePage = ({ templates }) => {
  const { isPageLoaded, isFirstLoad } = useLoading();

  return (
    <>
      <Head>
        <title>HTMLWOW — HTML templates that make you go WOW</title>
        <meta property="og:url" content="https://www.htmlwow.com" />
      </Head>

      {isPageLoaded || !isFirstLoad ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomePage;
