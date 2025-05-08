const ContactForm = () => {
  return (
    <section>
      <div>
        <h3>Let's work together!!</h3>
        <p>
          Let's collaborate to bring your ideas to life with designs that
          inspire, engage, and deliver results.
        </p>
      </div>
      <form>
        <div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email address" />
          <input type="tel" placeholder="Phone number" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
