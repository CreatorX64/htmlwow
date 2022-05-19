import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="grid min-h-screen grid-rows-[max-content,1fr] overflow-x-hidden bg-primary-50 font-brand text-primary-700">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between py-6 px-4">
        {/* Logo */}
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Website logo" width={28} height={28} />
          </a>
        </Link>

        {/* Hamburger icon */}
        <span onClick={() => setIsMobileNavOpen(true)}>
          <Image
            src="/hamburger.svg"
            alt="Hamburger icon"
            width={30}
            height={20}
          />
        </span>

        {/* Navigation menu */}
        <div
          className={`absolute top-0 left-0 z-50 grid h-screen w-full place-items-center bg-primary-100 transition-transform duration-500 ${
            isMobileNavOpen
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full"
          }`}
        >
          <span
            className="absolute top-7 right-5"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <Image src="/close.svg" width={24} height={24} alt="Close icon" />
          </span>

          <ul className=" flex flex-col items-start justify-center gap-6 text-lg font-black text-primary-800">
            <li>
              <Link href="/">
                <a>Home.</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog.</a>
              </Link>
            </li>
            <li>
              <Link href="/templates">
                <a>Templates.</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>Contact.</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="bg-red-100">{children}</main>
    </div>
  );
};

export default Layout;
