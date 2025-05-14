import IntroTestimonial from "./IntroTestimonial";
import Reviews from "./Reviews";

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-[#01181e]">
      <section className="w-[75rem] mx-auto py-12 flex justify-between">
        <IntroTestimonial />
        <Reviews />
      </section>
    </section>
  );
};

export default Testimonial;
