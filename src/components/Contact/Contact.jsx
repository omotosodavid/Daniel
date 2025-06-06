import ContactForm from "./ContactForm";
import ContactMe from "./ContactMe";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center flex-wrap lg:px-0 px-4 lg:gap-x-32 gap-y-10 lg:w-[75rem] mx-auto py-16"
    >
      <ContactForm />
      <ContactMe />
    </section>
  );
};

export default Contact;
