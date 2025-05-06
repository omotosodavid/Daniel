import { Link } from "react-router";
import {navs} from "../Export"
const NavLinks = () => {
  return (
    <ul>
      {navs.map((nav, index) => (
        <li key={index}>
          <Link
            className="hover:text-white duration-150 text-[#5A5A5A]"
            to={nav.link}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
