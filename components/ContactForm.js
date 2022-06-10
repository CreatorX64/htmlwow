import { useState } from "react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  XIcon
} from "@heroicons/react/outline";

import emailjs from "@/lib/emailjs";
import IconEnvelope from "@/icons/IconEnvelope";
import IconLoading from "@/icons/IconLoading";

const ContactForm = () => {
  const [isSendLoading, setIsSendLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validate inputs
    if (!name.trim() || !email.trim || !message.trim()) {
      setFormError("Please fill out all required fields");
      return;
    } else if (
      name.length > 200 ||
      email.length > 200 ||
      message.length > 10000
    ) {
      setFormError("Please provide shorter inputs");
      return;
    }

    setIsSendLoading(true);

    emailjs
      .sendForm("service_zgrjxcq", "template_glzxvep", e.target)
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormError(null);
        setIsSuccessVisible(true);
      })
      .catch(() => {
        setFormError("Email service not available :(");
        setIsSuccessVisible(false);
      })
      .finally(() => {
        setIsSendLoading(false);
      });
  };

  return (
    <form
      className="flex-shrink-0 flex-grow-0 md:mx-auto md:w-[459px]"
      onSubmit={handleSubmit}
    >
      {formError && (
        <div className="input mb-4 flex items-center gap-3 bg-red-500 font-medium md:mb-5">
          <ExclamationCircleIcon className="h-6 w-6" />
          <p>{formError}</p>
          <XIcon
            className="ml-auto h-5 w-5 cursor-pointer"
            onClick={() => setFormError(null)}
          />
        </div>
      )}
      {isSuccessVisible && (
        <div className="input mb-4 flex items-center gap-3 bg-green-600 font-medium md:mb-5">
          <CheckCircleIcon className="h-6 w-6" />
          <p>Your message was sent successfuly :)</p>
          <XIcon
            className="ml-auto h-5 w-5 cursor-pointer"
            onClick={() => setIsSuccessVisible(false)}
          />
        </div>
      )}
      <input
        required
        type="text"
        className="input mb-4 md:mb-5"
        placeholder="John"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        required
        type="email"
        className="input mb-4 md:mb-5"
        placeholder="johndoe@email.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        required
        cols="30"
        rows="4"
        className="input mb-5 resize-none md:mb-6"
        placeholder="Hi! Could you help me create a website for ..."
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        className="btn-primary flex items-center gap-[10px]"
        disabled={isSendLoading}
      >
        <span className="relative block h-5 w-5 md:h-6 md:w-6">
          {isSendLoading ? <IconLoading /> : <IconEnvelope />}
        </span>
        <span>{isSendLoading ? "Sending..." : "Send your message"}</span>
      </button>
    </form>
  );
};

export default ContactForm;
