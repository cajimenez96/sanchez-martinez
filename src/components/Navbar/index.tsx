import { useState } from "react"
import { LogoNav } from "../SvgIcons";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { LuX } from "react-icons/lu";
import { navbar } from "../../helpers/constants";
import Button from "../Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between md:justify-around items-center h-24 px-4 mt-4">
      <LogoNav />

      <ul className="hidden md:flex">
        {navbar.map(item => (
          <li
            key={item.id}
            className="mx-4 m-2 duration-300 text-oscuro"
          >
            {item.dropdown ? 
                <Button>{item.name}</Button>
              : (
                <Button buttonStyle="link">{item.name}</Button>
            )}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden text-oscuro w-9 h-9">
        {!nav ? <FiMenu size={"auto"} /> : <LuX size={"auto"} />}
      </div>

      <div className="w-44 hidden md:block">
        <Button buttonStyle="switch">
          Noticias
          <FiArrowRight />
        </Button>
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] pt-8 h-full border-r bg-oscuro ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {navbar.map(item => (
          <li
            key={item.id}
            className="p-4 hover:bg-crema duration-300 hover:text-oscuro cursor-pointer border-gray-600 text-crema"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar;
