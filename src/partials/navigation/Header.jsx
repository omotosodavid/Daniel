import Button from "./Button";
import NavLinks from "./NavLinks";
import logo from "../../asset/logo.svg";
import ImageComponent from "../ImageComponent";
const Header = () => {
  return (
    <header>
      <ImageComponent addClass="brightness-150" image={logo} />
      <NavLinks />
      <Button />
    </header>
  );
};

export default Header;
