import HireMe from "./HireMe";
import ServicesIllustration from "./ServicesIllustration";

const Services = () => {
  return (
    <section className="bg-[#01181e] py-9">
      <section className="w-[75rem] mx-auto">
        <div className="grid gap-y-5 text-white text-center mb-10">
          <h2 className="text-5xl bg-gradient-to-r from-[#064152] to-[#9DC5FA] bg-clip-text text-transparent h-14 text-center font-semibold">
            My Quality Services
          </h2>
          <h6 className="text-xl w-[40rem] mx-auto font-normal">
            I deliver creative, high-quality design solutions that exceed
            expectations and drive results
          </h6>
        </div>
        <section className="flex items-center justify-between w-full">
          <ServicesIllustration />
          <HireMe />
        </section>
      </section>
    </section>
  );
};

export default Services;
