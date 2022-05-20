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

        <div className="px-6 py-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            placeat modi nesciunt natus autem sed amet ratione molestiae
            perferendis consequatur rerum sunt, numquam, deserunt labore, ab
            quam a adipisci. Labore! Enim maiores, suscipit consectetur, nihil
            adipisci id non similique inventore voluptatum fuga consequatur
            deleniti saepe fugiat accusamus commodi quia sit nemo reprehenderit.
            Voluptate laboriosam iure nobis ea pariatur. Fugiat, perspiciatis!
            Eveniet voluptatem id minus optio ab, expedita, ipsam ducimus
            obcaecati, quae placeat repudiandae perspiciatis adipisci ea ex!
            Illo, consequuntur ab quaerat libero dicta sunt accusamus saepe
            aspernatur, enim impedit dolor. Fugiat vel ipsam sapiente nesciunt
            quia nam temporibus enim quaerat quidem minima facere, laboriosam
            alias odio. Repellat, corporis alias rem sed repudiandae nostrum vel
            eaque fugiat eius id earum aspernatur! Porro, voluptas error
            voluptatum consequuntur ab facilis similique adipisci! Nostrum
            molestiae sed illum expedita sapiente necessitatibus ad voluptate.
            Repudiandae sapiente nisi beatae provident impedit fugit numquam
            iste autem voluptatibus illo. Cumque, tempora eius! Asperiores nam,
            soluta consectetur eligendi porro architecto esse assumenda aliquam
            voluptate quidem modi doloremque. Blanditiis, ad dolores.
            Repudiandae, alias. Ducimus quas odio ab dolore explicabo quibusdam
            error. Ut voluptates vero illum at? Odio molestias mollitia nihil
            nisi, enim ducimus maiores fugit commodi qui voluptatum aliquid
            placeat similique exercitationem consequuntur ipsum laudantium?
            Rerum vel rem exercitationem labore natus. Assumenda iusto veniam
            distinctio velit corrupti repellendus tenetur nobis, sed tempore
            vero perferendis dolores libero consequuntur commodi, consectetur
            expedita eaque necessitatibus neque voluptatum magnam repellat eum
            odit. Repellendus, cum quasi! Dolorem labore numquam nemo maxime
            architecto aperiam quia magnam natus, aut rerum maiores eligendi
            delectus fugiat illo laboriosam, blanditiis, officiis molestias
            quisquam nesciunt nisi autem optio officia? Eos, eveniet veniam?
            Reiciendis delectus cum iure atque ducimus aspernatur eligendi
            vitae. Ipsam consectetur facere sit dolor facilis magni autem, nisi
            obcaecati corrupti mollitia accusantium adipisci hic corporis
            commodi, repellat similique aspernatur. Tempora!
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
