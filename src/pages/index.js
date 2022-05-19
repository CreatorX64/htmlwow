import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/navigation";

const HomePage = () => {
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
          <div className="mt-[76px] flex flex-col items-center justify-start">
            <h1 className="text-center">
              <span className="block text-base font-extrabold text-slate-50">
                HTML templates that make you go
              </span>
              <span className="block -translate-y-5 bg-[url('/pattern-title.jpg')] bg-cover bg-clip-text bg-center text-[94px] font-extrabold text-transparent">
                WOW
              </span>
            </h1>

            <div className="flex flex-col items-center justify-center gap-6">
              <a href="#templates" className="btn-primary">
                Explore all templates ↓
              </a>
              <Link href="/about">
                <a className="btn-secondary">About this project</a>
              </Link>
            </div>
          </div>

          {/* Wave decoration */}
          <div className="mt-auto h-[160px] bg-[url('/wave-top.png')] bg-cover bg-center"></div>
        </div>

        <main className="px-4 py-20">
          <p>These are the templates</p>
        </main>
      </div>
    </>
  );
};

export default HomePage;
