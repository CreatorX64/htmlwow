import TemplateCard from "components/TemplateCard";
import ContactForm from "components/ContactForm";

const Templates = ({ templates }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:mx-auto md:max-w-[1062px] md:items-stretch md:gap-12 lg:gap-16">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}

      <p className="mt-4 text-center text-sm text-slate-400 md:text-base lg:text-lg">
        ✨ More templates coming soon! ✨
      </p>

      <div className="mt-16 md:mt-24 lg:mt-28">
        <h2 className="mb-8 text-center text-lg font-bold md:mb-12 md:text-3xl">
          <span className="mb-1 block md:mb-3">
            Can&apos;t find the perfect template
            <br className="md:hidden" /> you&apos;re looking for?
          </span>
          <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s create it together :)
          </span>
        </h2>

        <ContactForm />
      </div>
    </div>
  );
};

export default Templates;
