import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.documentElement.classList.remove("overflow-y-hidden");
    }
  }, [isMobileNavOpen]);

  return (
    <nav className="relative p-4 px-4 sm:px-6 md:py-11">
      <div className="mx-auto flex items-center justify-between lg:container xl:max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <a
            aria-label="Go to homepage"
            className="relative h-[21px] w-[95px] md:h-[28px] md:w-[127px]"
          >
            <Image src="/images/logo.svg" alt="Website logo" layout="fill" />
          </a>
        </Link>

        {/* Hamburger icon */}
        <span
          className="z-[100] cursor-pointer md:hidden"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? (
            <Image
              src="/icons/close.svg"
              width={32}
              height={32}
              alt="Close icon"
            />
          ) : (
            <Image
              src="/icons/hamburger.svg"
              alt="Hamburger icon"
              width={32}
              height={32}
            />
          )}
        </span>

        {/* Navigation menu */}
        <div
          className={`absolute top-0 left-0 z-50 grid h-screen w-full place-items-center bg-slate-800 transition-transform duration-500 md:static md:block md:h-max md:w-max md:bg-transparent ${
            isMobileNavOpen
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full md:pointer-events-auto md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-14">
            <li>
              <Link href="/">
                <a className="nav-link md:hidden" onClick={toggleMobileNav}>
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="nav-link hidden md:inline">Home</a>
              </Link>
            </li>

            <li>
              <Link href="/license">
                <a className="nav-link md:hidden" onClick={toggleMobileNav}>
                  License
                </a>
              </Link>
              <Link href="/license">
                <a className="nav-link hidden md:inline">License</a>
              </Link>
            </li>

            <li>
              <a
                href="https://htmlwow.gumroad.com/"
                className="btn-cta group flex items-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit on Gumroad</span>
                <ExternalLinkIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
