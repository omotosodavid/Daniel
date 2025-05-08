import { contacts } from "../../partials/Export";

const ContactMe = () => {
  return (
    <section>
      {contacts.map((contact, index) => (
        <div key={index}>
          <div>{contact.icon}</div>
          <div>
            <p>{contact.title}</p>
            <h6>{contact.content}</h6>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactMe;
