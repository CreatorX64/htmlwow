import IconEmail from "@/icons/email";
import IconGitHub from "@/icons/github";
import IconInstagram from "@/icons/instagram";
import IconLinkedIn from "@/icons/linkedin";
import SoundIcon from "@/icons/sound";
import IconSpotify from "@/icons/spotify";
import IconTwitter from "@/icons/twitter";
import Image from "next/image";
import useSound from "use-sound";

const AboutCard = () => {
  const [playNameSound] = useSound("/audio/hakan.mp3");

  return (
    <div className="shadow-inset-custom mx-auto grid w-72 grid-cols-[86px_1fr] gap-x-4 gap-y-5 overflow-hidden rounded-2xl bg-slate-900 px-5 pt-6 pb-7 md:w-auto md:max-w-[1062px] md:grid-cols-[127px_1fr] md:grid-rows-[32px_67px_auto_auto] md:gap-x-10 md:gap-y-7 md:px-8 md:pt-8 md:pb-9 lg:grid-cols-[168px_1fr] lg:grid-rows-[32px_108px_auto_auto] lg:gap-x-12 lg:px-12 lg:py-10">
      {/* Image */}
      <div className="relative h-[86px] w-[86px] md:row-span-2 md:h-[127px] md:w-[127px] lg:h-[168px] lg:w-[168px]">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar of Hakan, the creator of the website"
          layout="fill"
          className="rounded-full"
        />
      </div>

      {/* Name box */}
      <div className="grid grid-cols-[1fr_max-content] items-center justify-items-start gap-y-2 self-center justify-self-start md:mt-4 md:grid-cols-[max-content_max-content_max-content] md:gap-x-2 md:self-start">
        <p className="text-lg font-bold md:text-2xl">Hi, I&apos;m Hakan</p>
        <span className="text-lg font-bold md:col-start-3 md:text-2xl">👋</span>
        <button
          className="group flex items-center gap-[6px] rounded bg-slate-800 px-2 py-1 text-slate-400 md:col-start-2 md:row-start-1"
          onClick={playNameSound}
        >
          <span className="font-mono tracking-widest transition group-hover:text-slate-300">
            /ha:kan/
          </span>
          <span
            className="relative block h-[14px] w-[14px] md:h-4 md:w-4"
            aria-hidden
          >
            <SoundIcon className="transition group-hover:fill-slate-300" />
          </span>
        </button>
      </div>

      {/* Bio text */}
      <div className="col-span-2 space-y-[14px] text-sm text-slate-200 md:col-start-2 md:row-span-3 md:row-start-2 md:pt-2 md:text-base">
        <p className="leading-loose">
          I create website templates using HTML, CSS, JavaScript, and Tailwind
          CSS. I built HTMLWOW to provide high quality, performant, and nicely
          designed HTML templates for people in a hurry.
        </p>
        <p className="leading-loose">
          While building projects, I keep the best design & development
          practices in mind so that my templates are{" "}
          <span className="text-slate-400">(1)</span> accessible,{" "}
          <span className="text-slate-400">(2)</span> follow SEO guidelines, and{" "}
          <span className="text-slate-400">(3)</span> have the best performance
          possible.
        </p>
        <p className="leading-loose lg:relative">
          You can{" "}
          <span className="xl:font-semibold xl:text-blue-200">contact</span> me
          anytime to share a project idea, hire me as a freelancer, or just to
          say hi :)
          <span className="-left-8 -bottom-8 hidden h-[23px] w-[123px] bg-[url('/images/arrow-left.png')] bg-cover xl:absolute xl:block"></span>
        </p>
      </div>

      {/* Contact links */}
      <div className="mt-2 md:col-start-1 md:row-start-3 lg:justify-self-center">
        <ul className="grid grid-cols-[1fr_1fr_1fr] gap-3 lg:grid-cols-[max-content_max-content_max-content]">
          <li>
            <a
              href="https://twitter.com/CreatorX64"
              aria-label="My Twitter account"
              className="relative block h-8 w-8 md:h-9 md:w-9"
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CreatorX64"
              aria-label="My GitHub account"
              className="relative block h-8 w-8 md:h-9 md:w-9"
              target="_blank"
              rel="noreferrer"
            >
              <IconGitHub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/creatorx64/"
              aria-label="My LinkedIn account"
              className="relative block h-8 w-8 md:h-9 md:w-9"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/creatorx64/"
              aria-label="My Instagram account"
              className="relative block h-8 w-8 md:h-9 md:w-9"
              target="_blank"
              rel="noreferrer"
            >
              <IconInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/67nha4782fmzdlxt05jx6gb4v?si=76ad5a00095e44d9"
              aria-label="My Spotify account"
              className="relative block h-8 w-8 md:h-9 md:w-9"
              target="_blank"
              rel="noreferrer"
            >
              <IconSpotify />
            </a>
          </li>
          <li>
            <a
              href="mailto:creatorx64@gmail.com"
              aria-label="My Email"
              className="relative block h-8 w-8 md:h-9 md:w-9"
              target="_blank"
              rel="noreferrer"
            >
              <IconEmail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
