import { contacts } from "../../partials/Export";

const ContactMe = () => {
  return (
    <section className="grid items-start gap-y-6">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center gap-x-5">
          <div className="text-[#434242] text-2xl p-4 bg-gradient-to-t to-[#D9D9D9] from-[#737373] rounded-full">{contact.icon}</div>
          <div className="text-lg">
            <p className="text-[#7D7A7A]">{contact.title}</p>
            <p className="text-white font-medium">{contact.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactMe;
