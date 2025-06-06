import HireMe from "./HireMe";
import ServicesIllustration from "./ServicesIllustration";

const Services = () => {
  return (
    <section id="service" className="bg-[#01181e] py-9">
      <section className="xl:w-[75rem] mx-auto xl:px-0 px-4">
        <div className="grid gap-y-5 text-white text-center mb-10">
          <h2 className="sm:text-5xl text-4xl bg-gradient-to-r from-[#064152] to-[#9DC5FA] bg-clip-text text-transparent sm:h-14 h-max text-center font-semibold">
            My Quality Services
          </h2>
          <p className="text-lg sm:w-[40rem] mx-auto font-normal">
            I deliver creative, high-quality design solutions that exceed
            expectations and drive results
          </p>
        </div>
        <section className="flex items-center lg:justify-between justify-center flex-wrap w-full gap-y-16">
          <ServicesIllustration />
          <HireMe />
        </section>
      </section>
    </section>
  );
};

export default Services;
