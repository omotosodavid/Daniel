import HeroContent from "./HeroContent";
import danielImage from "../../asset/Daniel.svg";
import ImageComponent from "../../partials/ImageComponent";
const Hero = () => {
  return (
    <section>
      <HeroContent />
      <ImageComponent image={danielImage} />
    </section>
  );
};

export default Hero;
