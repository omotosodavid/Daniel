import { FaBehance, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
const HeroContent = () => {
  return (
    <section className="text-white w-[38rem] font-medium">
      <div className="mb-3">
        <h6 className="flex items-center gap-x-2 text-[#1289AA] text-xl font-normal">
          <span className=" block h-[2px] w-4 bg-[#1289AA]"></span> Introducing
        </h6>
      </div>
      <div className="grid gap-y-2">
        <h2 className="text-5xl">Hello</h2>
        <h3 className="text-3xl">I am Daniel</h3>
        <h1 className="text-7xl bg-gradient-to-r from-[#3109C3] to-[#098FD3] bg-clip-text text-transparent h-[5.3rem]">Product designer</h1>
      </div>
      <div className="mt-4">
        <p className="text-lg text-[#C0BCBC]">
          Since beginning my journey as a freelance designer Over 2 years ago, i
          have had the privilege of working remotely with agencies, consulting
          for startups, and collaborating with talented individuals to bring
          innovative ideas to life. Each project has allowed me to refine my
          craft and deliver designs that merge creativity with functionality.
        </p>
      </div>
      <div className="flex gap-x-8 items-center mt-10">
        <button className="text-lg border-2 border-[#6B6767] rounded-xl py-3 px-9">Download CV</button>
        <div className="flex gap-x-3 text-3xl">
          <FaBehance className="p-2 border-2 border-[#5A5A5A] rounded-full" title="Behance"/>
          <FaLinkedinIn className="p-2 border-2 border-[#5A5A5A] rounded-full" title="LinkedIn"/>
          <FaXTwitter className="p-2 border-2 border-[#5A5A5A] rounded-full" title="X"/>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
