import Image from "next/image";
import useSound from "use-sound";

const AboutCard = () => {
  const [playNameSound] = useSound("/hakan.mp3");

  return (
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
          I do frontend development to create web[sites|apps] using HTML, CSS,
          JavaScript, Tailwind CSS, React, Next.js, Firebase, and more.
        </p>
        <p>
          While creating my projects, I keep the best design & development
          practices in mind so that my projects are{" "}
          <span className="text-slate-400">(1)</span> accessible,{" "}
          <span className="text-slate-400">(2)</span> follow SEO guidelines, and{" "}
          <span className="text-slate-400">(3)</span> have the best performance
          possible.
        </p>
        <p>
          You can contact to me anytime to share a project idea, hire me as a
          freelancer, or just to say hi :)
        </p>
      </div>

      {/* Contact links */}
      <div className="mt-2">
        <ul className="grid grid-cols-[1fr_1fr_1fr] gap-3">
          <li>
            <a
              href="#!"
              aria-label="My Twitter account"
              className="relative block h-8 w-8"
            >
              <Image src="/icon-twitter.svg" alt="Twitter icon" layout="fill" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              aria-label="My GitHub account"
              className="relative block h-8 w-8"
            >
              <Image src="/icon-github.svg" alt="GitHub icon" layout="fill" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              aria-label="My LinkedIn account"
              className="relative block h-8 w-8"
            >
              <Image
                src="/icon-linkedin.svg"
                alt="LinkedIn icon"
                layout="fill"
              />
            </a>
          </li>
          <li>
            <a
              href="#!"
              aria-label="My Instagram account"
              className="relative block h-8 w-8"
            >
              <Image
                src="/icon-instagram.svg"
                alt="Instagram icon"
                layout="fill"
              />
            </a>
          </li>
          <li>
            <a
              href="#!"
              aria-label="My Spotify account"
              className="relative block h-8 w-8"
            >
              <Image src="/icon-spotify.svg" alt="Spotify icon" layout="fill" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              aria-label="My Email"
              className="relative block h-8 w-8"
            >
              <Image src="/icon-email.svg" alt="Email icon" layout="fill" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
