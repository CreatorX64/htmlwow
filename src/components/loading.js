import Image from "next/image";

const loaders = [
  "/loaders/fidget-spinner.gif",
  "/loaders/ghost.gif",
  "/loaders/rhombus.gif",
  "/loaders/loading-cat.gif"
];

const Loading = () => {
  const loader = loaders[Math.floor(Math.random() * loaders.length)];

  return (
    <div className="absolute top-0 left-0 grid h-screen w-full place-items-center">
      <Image
        src={loader}
        alt="Loading animation"
        width={80}
        height={80}
        className="rounded-full"
      />
    </div>
  );
};

export default Loading;
