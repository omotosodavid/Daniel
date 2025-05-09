import { Link } from "react-router";
import {navs} from "../Export"
const NavLinks = () => {
  return (
    <ul className="flex justify-between w-96">
      {navs.map((nav, index) => (
        <li key={index}>
          <Link
            className="hover:text-white duration-150 text-[#888888] font-medium"
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
