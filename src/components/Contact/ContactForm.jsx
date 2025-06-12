const ContactForm = () => {
  return (
    <section className="relative overflow-clip bg-gradient-to-t from-[#10343E] to-[#7695BD] sm:px-10 px-4 py-4 md:w-[37rem] rounded-xl drop-shadow-lg">
      <div>
        <h3 className="text-3xl text-white font-semibold text-center mb-4">
          Let's work together!!
        </h3>
        <p className="sm:text-lg text-[#2D3949] font-medium">
          Let's collaborate to bring your ideas to life with designs that
          inspire, engage, and deliver results.
        </p>
      </div>
      <form
        action="https://formsubmit.co/danielomotoso52@gmail.com"
        method="POST"
        onSubmit={() => alert("Daniel would respond soon")}
      >
        <input type="hidden" name="_subject" value="New submission!" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <div className="flex justify-between items-center gap-y-5 flex-wrap mt-10 mb-6">
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg sm:px-4 px-2 py-3 text-white w-[47%]"
            type="text"
            placeholder="First name"
            name="FirstName"
            required
          />
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg sm:px-4 px-2 py-3 text-white w-[47%]"
            type="text"
            placeholder="Last name"
            name="LastName"
            required
          />
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg sm:px-4 px-2 py-3 text-white w-[47%]"
            type="email"
            placeholder="Email address"
            name="Email"
            required
          />
          <input
            className="bg-[#475e70] border-[#706F6F] border rounded-lg sm:px-4 px-2 py-3 text-white w-[47%]"
            type="tel"
            placeholder="Phone number"
            name="Phone-number"
            required
          />
        </div>
        <textarea
          className="bg-[#475e70] border-[#706F6F] border rounded-lg sm:px-4 px-2 py-3 text-white w-full h-44 mb-6"
          placeholder="Message"
          name="Message"
          required
        ></textarea>
        <button className="bg-[#5C30FD] text-white sm:text-xl text-lg font-medium py-4 sm:px-10 px-6 rounded-3xl duration-200 hover:scale-95">
          Send Message
        </button>
      </form>
      <div className="absolute -top-5 -left-16 border-[#3109C3] border-[1.5rem] p-6 rounded-full"></div>
      <div className="absolute -bottom-6 -right-10 border-[#03242E] border-[1.3rem] p-8 rounded-full"></div>
    </section>
  );
};

export default ContactForm;
