import ContactForm from "./ContactForm";
import ContactMe from "./ContactMe";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center gap-x-32 w-[75rem] mx-auto py-16"
    >
      <ContactForm />
      <ContactMe />
    </section>
  );
};

export default Contact;
