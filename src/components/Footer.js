const Footer = () => {
  return (
    <footer className="space-y-4 border-t-2 border-slate-900 px-4 pt-10 pb-28 md:pt-20 md:pb-36">
      <p className="text-center text-sm text-slate-400 md:text-base">
        Made with 💙 by{" "}
        <a
          href="https://twitter.com/CreatorX64"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          @CreatorX64
        </a>
      </p>
      <p className="text-center text-sm text-slate-400 md:text-base">
        For all inquiry, please contact{" "}
        <a href="mailto:CreatorX64@gmail.com" className="link">
          CreatorX64@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
