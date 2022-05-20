import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink, Element as ScrollTarget } from "react-scroll";
import useSound from "use-sound";

import Navigation from "@/components/navigation";
import TemplateCard from "@/components/template-card";
import { getTemplates } from "@/lib/templates";

export const getStaticProps = () => {
  const templates = getTemplates();

  return {
    props: {
      templates
    }
  };
};

const HomePage = ({ templates }) => {
  const [playNameSound] = useSound("/hakan.mp3");

  return (
    <>
      <Head>
        <title>HTMLWOW — HTML templates that make you go WOW</title>
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-slate-800 font-brand text-slate-100">
        {/* Header */}
        <div className="bg-[url('/pattern-hero.jpg')] bg-cover bg-center">
          {/* Navigation */}
          <Navigation />

          {/* Hero */}
          <div className="mt-24 flex flex-col items-center justify-start">
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
                offset={-60}
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

        <main className="bg-slate-900 px-4 pt-20 pb-4 md:px-6 md:pb-8 md:pt-24 lg:px-10 lg:pb-16 lg:pt-32">
          {/* Templates */}
          <ScrollTarget name="templates">
            <div className="flex flex-col items-center gap-8 md:mx-auto md:max-w-[1062px] md:items-stretch md:gap-12 lg:gap-16">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}

              <p className="mt-4 text-center text-sm text-slate-400 md:text-base lg:text-lg">
                ✨ More templates coming soon! ✨
              </p>

              {/* Contact form */}
              <div className="mt-16 md:mt-24 lg:mt-28">
                <h2 className="mb-8 text-center text-lg font-bold md:mb-12 md:text-3xl">
                  <span className="mb-1 block md:mb-3">
                    Can&apos;t find the perfect template
                    <br className="md:hidden" /> you&apos;re looking for?
                  </span>
                  <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                    Let&apos;s create it together :)
                  </span>
                </h2>

                <form className="flex-shrink-0 flex-grow-0 md:mx-auto md:w-[459px]">
                  <input
                    required
                    type="email"
                    className="input mb-4 md:mb-5"
                    placeholder="youremail@example.com"
                  />
                  <textarea
                    required
                    cols="30"
                    rows="4"
                    className="input mb-5 resize-none md:mb-6"
                    placeholder="Hi! Could you help me create a website for ..."
                  />
                  <button className="btn-primary flex items-center gap-[10px]">
                    <span className="relative block h-5 w-5 md:h-6 md:w-6">
                      <Image
                        src="/email.svg"
                        alt="Envelope icon"
                        layout="fill"
                        aria-hidden
                      />
                    </span>
                    <span>Send your message</span>
                  </button>
                </form>
              </div>
            </div>
          </ScrollTarget>
        </main>

        {/* Wave decoration */}
        <div className="h-[105px] bg-[url('/wave-bottom.png')] bg-cover bg-center"></div>

        {/* Meet the creator */}
        <div className="px-4 py-16">
          <h2 className="mb-8 text-center text-lg font-bold text-slate-50">
            Meet the creator...
          </h2>

          <div className="shadow-inset-custom grid grid-cols-[86px_1fr] gap-x-5 gap-y-5 overflow-hidden rounded-2xl bg-slate-900 px-5 pt-6 pb-7">
            {/* Image */}
            <div className="relative h-[86px] w-[86px]">
              <Image
                src="/avatar.jpg"
                alt="Avatar of Hakan, the creator of the website"
                layout="fill"
                className="rounded-full"
              />
            </div>

            {/* Name box */}
            <div className="grid grid-cols-[1fr_max-content] items-center justify-items-start gap-y-2 self-center justify-self-start">
              <p className="text-lg font-bold">Hi, I&apos;m Hakan</p>
              <span className="text-lg font-bold">👋</span>
              <button
                className="flex items-center gap-[6px] rounded bg-slate-800 px-2 py-1 text-slate-400"
                onClick={playNameSound}
              >
                <span className="font-mono tracking-widest">/ha:kan/</span>
                <span className="relative block h-[14px] w-[14px]">
                  <Image
                    src="/sound.svg"
                    alt="Sound icon"
                    layout="fill"
                    aria-hidden
                  />
                </span>
              </button>
            </div>

            {/* Bio text */}
            <div className="col-span-2 space-y-[14px] text-sm leading-loose text-slate-200">
              <p>
                I do frontend development to create web[sites|apps] using HTML,
                CSS, JavaScript, Tailwind CSS, React, Next.js, Firebase, and
                more.
              </p>
              <p>
                While creating my projects, I keep the best design & development
                practices in mind so that my projects are{" "}
                <span className="text-slate-400">(1)</span> accessible,{" "}
                <span className="text-slate-400">(2)</span>
                follow SEO guidelines, and{" "}
                <span className="text-slate-400">(3)</span> have the best
                performance possible.
              </p>
              <p>
                You can contact to me anytime to share a project idea, hire me
                as a freelancer, or just to say hi :)
              </p>
            </div>

            {/* Contact links */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
