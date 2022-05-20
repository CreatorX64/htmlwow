import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink, Element as ScrollTarget } from "react-scroll";
import Navigation from "@/components/navigation";
import { getTemplates } from "@/lib/templates";
import TemplateCard from "@/components/template-card";

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

      <div className="min-h-screen overflow-x-hidden bg-slate-900 font-brand text-slate-100">
        {/* Header */}
        <div className="bg-[url('/pattern-hero.jpg')] bg-cover bg-center">
          {/* Navigation */}
          <Navigation />

          {/* Hero */}
          <div className="mt-[76px] flex flex-col items-center justify-start md:mt-[94px]">
            <h1 className="text-center">
              <span className="block text-base font-bold text-slate-50 md:text-[32px]">
                HTML templates that make you go
              </span>
              <span className="-mt-6 block bg-[url('/pattern-title.jpg')] bg-cover bg-clip-text bg-center font-display text-[113px] text-transparent md:-mt-12 md:text-[227px]">
                WOW
              </span>
            </h1>

            <div className="flex flex-col items-center justify-center gap-4 md:-translate-y-8 md:flex-row md:gap-6">
              <ScrollLink
                to="templates"
                smooth={true}
                duration={500}
                className="btn-primary flex items-center justify-center gap-[10px]"
              >
                <span>Explore all templates</span>
                <span className="relative block h-[14px] w-[12px]">
                  <Image
                    src="/arrow-down.svg"
                    alt="Down arrow"
                    aria-hidden="true"
                    layout="fill"
                  />
                </span>
              </ScrollLink>

              <Link href="/about">
                <a className="btn-secondary">About this project</a>
              </Link>
            </div>
          </div>

          {/* Wave decoration */}
          <div className="mt-auto h-[160px] bg-[url('/wave-top.png')] bg-cover bg-center"></div>
        </div>

        <ScrollTarget name="templates">
          <main className="px-4 py-20">
            {/* Template Cards */}
            <div className="flex flex-col items-center gap-16 md:mx-auto md:max-w-[1062px] md:items-stretch">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </main>
        </ScrollTarget>
      </div>
    </>
  );
};

export default HomePage;
