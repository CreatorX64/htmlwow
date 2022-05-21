import Image from "next/image";

const ContactForm = () => {
  return (
    <form className="flex-shrink-0 flex-grow-0 md:mx-auto md:w-[459px]">
      <input
        required
        type="email"
        className="input mb-4 md:mb-5"
        placeholder="youremail@example.com"
      />
      <textarea
        required
        cols="30"
        rows="4"
        className="input mb-5 resize-none md:mb-6"
        placeholder="Hi! Could you help me create a website for ..."
      />
      <button className="btn-primary flex items-center gap-[10px]">
        <span className="relative block h-5 w-5 md:h-6 md:w-6">
          <Image
            src="/email.svg"
            alt="Envelope icon"
            layout="fill"
            aria-hidden
          />
        </span>
        <span>Send your message</span>
      </button>
    </form>
  );
};

export default ContactForm;
