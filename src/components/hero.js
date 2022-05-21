import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-start">
      <h1 className="text-center">
        <span className="block text-base font-bold text-slate-50 md:text-[32px]">
          HTML templates that make you go
        </span>
        <span className="-mt-6 block bg-[url('/images/pattern-title.jpg')] bg-cover bg-clip-text bg-center font-display text-[113px] text-transparent md:-mt-12 md:text-[227px]">
          WOW
        </span>
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 md:-translate-y-8 md:flex-row md:gap-6">
        <ScrollLink
          to="templates"
          smooth={true}
          duration={500}
          offset={-60}
          className="btn-primary group flex items-center justify-center gap-[10px]"
        >
          <span>Explore all templates</span>
          <span className="relative block h-[14px] w-[12px]">
            <Image
              src="/icons/arrow-down.svg"
              alt="Down arrow"
              aria-hidden="true"
              layout="fill"
            />
          </span>
        </ScrollLink>

        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-130}
          className="btn-secondary"
        >
          About this project
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
