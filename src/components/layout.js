import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="grid min-h-screen grid-rows-[max-content,1fr] overflow-x-hidden bg-slate-800 font-brand text-slate-100">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <a aria-label="Go to homepage">
            <Image src="/logo.svg" alt="Website logo" width={93} height={19} />
          </a>
        </Link>

        {/* Hamburger icon */}
        <span
          className="cursor-pointer"
          aria-label="Open navigation menu"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <Image
            src="/hamburger.svg"
            alt="Hamburger icon"
            width={32}
            height={32}
          />
        </span>

        {/* Navigation menu */}
        <div
          className={`absolute top-0 left-0 z-50 grid h-screen w-full place-items-center border-l-2 border-slate-900 bg-slate-800 transition-transform duration-500 ${
            isMobileNavOpen
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full"
          }`}
        >
          <span
            className="absolute top-4 right-5 cursor-pointer"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <Image src="/close.svg" width={32} height={32} alt="Close icon" />
          </span>

          <ul className=" flex flex-col items-start justify-center gap-10 text-lg font-semibold text-slate-100">
            <li>
              <Link href="/#templates">
                <a>Templates</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/license">
                <a>License</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>Contact</a>
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
