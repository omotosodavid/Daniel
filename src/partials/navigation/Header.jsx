import Button from "./Button";
import NavLinks from "./NavLinks";
import logo from "../../asset/logo.svg";
import ImageComponent from "../ImageComponent";
const Header = () => {
  return (
    <header className="flex items-center justify-between w-[75rem] mx-auto py-2">
      <ImageComponent addClass="brightness-150" image={logo} />
      <nav className="flex justify-between items-center w-[50rem]">
        <NavLinks />
        <Button />
      </nav>
    </header>
  );
};

export default Header;
