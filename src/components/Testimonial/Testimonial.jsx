import IntroTestimonial from "./IntroTestimonial";
import Reviews from "./Reviews";

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-[#01181e]">
      <section className="xl:w-[75rem] mx-auto py-12 flex md:justify-between justify-center flex-wrap xl:px-0 px-4 gap-y-12">
        <IntroTestimonial />
        <Reviews />
      </section>
    </section>
  );
};

export default Testimonial;
