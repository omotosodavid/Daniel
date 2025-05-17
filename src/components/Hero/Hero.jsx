import HeroContent from "./HeroContent";
import danielImage from "../../asset/Daniel.svg";
import ImageComponent from "../../partials/ImageComponent";
const Hero = () => {
  return (
    <section id="home" className="xl:w-[75rem] mx-auto flex items-center lg:flex-row flex-col gap-10 xl:px-0 px-4">
      <HeroContent />
      <ImageComponent image={danielImage} />
    </section>
  );
};

export default Hero;
