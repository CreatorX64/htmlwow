import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <nav className="relative p-4 md:py-11 md:px-20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a
            aria-label="Go to homepage"
            className="relative h-[21px] w-[95px] md:h-[28px] md:w-[127px]"
          >
            <Image src="/logo.svg" alt="Website logo" layout="fill" />
          </a>
        </Link>

        {/* Hamburger icon */}
        <span
          className="z-[100] cursor-pointer md:hidden"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? (
            <Image src="/close.svg" width={32} height={32} alt="Close icon" />
          ) : (
            <Image
              src="/hamburger.svg"
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
          <ul className="flex flex-col items-center justify-center gap-10 text-lg font-semibold text-slate-100 md:flex-row md:items-start md:gap-14 md:text-base md:font-normal">
            <li>
              <Link href="/">
                <a onClick={toggleMobileNav}>Home</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/about">
                <a onClick={toggleMobileNav}>About</a>
              </Link>
            </li> */}
            <li>
              <Link href="/license">
                <a onClick={toggleMobileNav}>License</a>
              </Link>
            </li>
            <li>
              <Link href="#!">
                <a className="btn-primary border-none text-base bg-gradient-to-r from-blue-500 to-blue-700 text-slate-50">
                  Visit our shop on Gumroad
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
