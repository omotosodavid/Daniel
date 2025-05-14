const ContactForm = () => {
  return (
    <section className="relative overflow-clip bg-gradient-to-t from-[#10343E] to-[#7695BD] px-10 py-4 w-[37rem] rounded-xl drop-shadow-lg">
      <div>
        <h3 className="text-3xl text-white font-semibold text-center mb-4">
          Let's work together!!
        </h3>
        <p className="text-lg text-[#2D3949] font-medium">
          Let's collaborate to bring your ideas to life with designs that
          inspire, engage, and deliver results.
        </p>
      </div>
      <form>
        <div className="flex justify-between items-center gap-y-5 flex-wrap mt-10 mb-6">
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg px-4 py-3 text-white w-[47%]"
            type="text"
            placeholder="First name"
          />
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg px-4 py-3 text-white w-[47%]"
            type="text"
            placeholder="Last name"
          />
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg px-4 py-3 text-white w-[47%]"
            type="email"
            placeholder="Email address"
          />
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg px-4 py-3 text-white w-[47%]"
            type="tel"
            placeholder="Phone number"
          />
        </div>
        <textarea
          className="bg-[#475e70] border-[#706F6F] border rounded-lg px-4 py-3 text-white w-full h-44 mb-6"
          placeholder="Message"
        ></textarea>
        <button className="bg-[#5C30FD] text-white text-xl font-medium py-4 px-10 rounded-3xl">
          Send Message
        </button>
      </form>
      <div className="absolute -top-5 -left-16 border-[#3109C3] border-[1.5rem] p-6 rounded-full"></div>
      <div className="absolute -bottom-6 -right-10 border-[#03242E] border-[1.3rem] p-8 rounded-full"></div>
    </section>
  );
};

export default ContactForm;
