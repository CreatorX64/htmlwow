import Image from "next/image";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`mt-24 flex flex-col items-center justify-start transition delay-[400ms] duration-1000 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <h1 className="text-center">
        <span className="block text-sm font-bold text-slate-50 md:text-[28px]">
          Free HTML templates that make you go
        </span>
        <span className="-mt-6 block bg-[url('/images/pattern-title.svg')] bg-clip-text bg-repeat font-display text-[113px] text-transparent md:-mt-12 md:text-[227px]">
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
