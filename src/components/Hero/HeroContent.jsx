import { FaBehance, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
const HeroContent = () => {
  return (
    <section>
      <div>
        <h6 className="flex items-center gap-x-2 text-[#1289AA]">
          <span className=" block h-[2px] w-4 bg-[#1289AA]"></span> Introducing
        </h6>
      </div>
      <div>
        <h2>Hello</h2>
        <h3>I am Daniel</h3>
        <h1>Product designer</h1>
      </div>
      <div>
        <p>
          Since beginning my journey as a freelance designer Over 2 years ago, i
          have had the privilege of working remotely with agencies, consulting
          for startups, and collaborating with talented individuals to bring
          innovative ideas to life. Each project has allowed me to refine my
          craft and deliver designs that merge creativity with functionality.
        </p>
      </div>
      <div>
        <button>Download CV</button>
        <div>
          <FaBehance/>
          <FaLinkedinIn/>
          <FaXTwitter/>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
