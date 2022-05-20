import Image from "next/image";

const TemplateCard = ({
  template: {
    title,
    imagePath,
    techStack,
    description,
    purchaseLink,
    previewLink
  }
}) => {
  return (
    <div className="flex w-72 flex-col overflow-hidden rounded-2xl">
      {/* Screenshot */}
      <div className="relative h-64 w-72">
        <Image src={imagePath} alt="Nestor template screenshot" layout="fill" />
      </div>

      {/* Text content */}
      <div className="bg-slate-800 px-4 pt-5 pb-6">
        <h2 className="mb-2 font-bold">
          {title} <span className="hidden md:inline">Template</span>
        </h2>
        <p className="mb-4 text-sm text-slate-400">{techStack}</p>
        <p className="mb-5 text-sm leading-loose text-slate-200">
          {description}
        </p>
        <div className="flex items-center gap-5">
          <a className="btn-primary w-max" href={purchaseLink}>
            Purchase
          </a>
          <a
            href={previewLink}
            className="flex items-center gap-[7px] text-sm text-blue-300"
          >
            <span>See it live</span>
            <span className="relative block h-[15px] w-[15px]">
              <Image
                src="/link-external.svg"
                layout="fill"
                alt="External link"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
