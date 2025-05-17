import Button from "./Button";
import NavLinks from "./NavLinks";
import logo from "../../asset/logo.svg";
import ImageComponent from "../ImageComponent";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header
      className={`md:flex items-center justify-between xl:px-0 px-4 xl:w-[75rem] mx-auto py-2 mb-8 ${
        mobileNav && "bg-black/95 h-screen fixed w-full z-50"
      }`}
    >
      <div className={`flex items-center justify-between ${
        mobileNav && "mb-10"}`}>
      <ImageComponent addClass="brightness-150" image={logo} /> {mobileNav === false ? (
        <BiMenu
          onClick={() => setMobileNav(true)}
          className="text-white text-4xl md:hidden cursor-pointer duration-200 hover:bg-black/50 rounded-full"
        />
      ) : (
        <BiX
          onClick={() => setMobileNav(false)}
          className="text-white text-4xl md:hidden cursor-pointer duration-200 hover:bg-black/50 rounded-full"
        />
      )}</div>
      <nav
        className={`md:flex md:flex-row flex-col h-3/4 md:h-fit ${
        mobileNav? "flex" : "hidden" } justify-between md:items-center lg:w-[70%] md:w-4/5 w-full`}
      >
        <NavLinks />
        <Button />
      </nav>
     
    </header>
  );
};

export default Header;
