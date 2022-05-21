import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const TemplateCard = ({
  template: {
    title,
    imagePath,
    techStack,
    description,
    longDescription,
    purchaseLink,
    previewLink
  }
}) => {
  return (
    <div className="flex w-72 flex-col overflow-hidden rounded-2xl md:w-full md:flex-row">
      {/* Screenshot */}
      <div className="relative h-64 w-72 md:h-[360px] md:w-[403px] md:shrink-0">
        <Image src={imagePath} alt="Nestor template screenshot" layout="fill" />
      </div>

      {/* Text content */}
      <div className="flex flex-col bg-slate-800 px-4 pt-5 pb-6 md:flex-1 md:px-6 md:py-7 lg:px-14 lg:py-9">
        <h2 className="mb-2 font-bold lg:text-2xl">
          {title} <span className="hidden md:inline">Template</span>
        </h2>
        <p className="mb-4 text-sm text-slate-400 lg:text-base">{techStack}</p>
        <p className="mb-5 text-sm text-slate-200 lg:text-base">
          <span className="leading-loose md:hidden">{description}</span>
          <span className="hidden leading-loose md:inline">
            {longDescription}
          </span>
        </p>
        <div className="mt-auto flex items-center gap-5 lg:gap-7">
          <a className="btn-primary w-max" href={purchaseLink}>
            Purchase
          </a>
          <a
            href={previewLink}
            className="link flex items-center gap-[7px] text-sm"
          >
            <span className="lg:text-base">See it live</span>
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
