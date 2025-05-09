import HeroContent from "./HeroContent";
import danielImage from "../../asset/Daniel.svg";
import ImageComponent from "../../partials/ImageComponent";
const Hero = () => {
  return (
    <section className="w-[75rem] mx-auto flex items-center gap-x-10 mt-8">
      <HeroContent />
      <ImageComponent image={danielImage} />
    </section>
  );
};

export default Hero;
