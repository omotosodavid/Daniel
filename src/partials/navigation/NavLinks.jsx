import { navs } from "../Export";
const NavLinks = () => {
  return (
    <ul className="flex md:flex-row flex-col h-4/6 md:h-fit justify-between w-96">
      {navs.map((nav, index) => (
        <li key={index}>
          <a
            href={nav.link}
            className="hover:text-white duration-150 text-[#888888] font-medium"
          >
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
