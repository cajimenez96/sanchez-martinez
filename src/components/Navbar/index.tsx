import { ReactNode, useState } from "react"
import { LogoNav } from "../SvgIcons";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { LuX } from "react-icons/lu";
import { navbar } from "../../helpers/constants";
import Button from "../Button";
import Dropdown from "../Dropdown";
import { NavbarItemMenu } from "../../helpers/interfaces";

interface MenuProps {
  children: ReactNode;
  className?: string;
  handleClick: () => void;
}

const Menu = ({children, handleClick, className}: MenuProps) => {
  return (
    <div onClick={handleClick} className={`block md:hidden w-9 h-9 cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  const handleSelect = (option: NavbarItemMenu) => {
    console.log(option);
    
  }

  return (
    <div className="flex justify-between md:justify-around items-center h-24 px-4 mt-4">
      <LogoNav />

      <ul className="hidden md:flex">
        {navbar.map(item => (
          <li
            key={item.id}
            className="mx-4 m-2 duration-300 text-oscuro"
          >
            {item.dropdown && item.dropdownMenu ?
                <Dropdown options={item.dropdownMenu} placeholder={item.name} onSelect={handleSelect} />
              : (
                <Button buttonStyle="link">{item.name}</Button>
            )}
          </li>
        ))}
      </ul>

      <div className="w-44 hidden md:block">
        <Button buttonStyle="switch">
          Noticias
          <FiArrowRight />
        </Button>
      </div>

      <Menu handleClick={handleNav} className="text-oscuro">
        <FiMenu size={"auto"} />
      </Menu>

      <>
        <div
          className={`ease-in-out text-end
            ${nav
              ? "fixed md:hidden right-0 top-0 w-[60%] pt-8 h-full bg-oscuro z-50"
              : "w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}
          duration-500`}
        >
          <div className="w-full flex justify-end">
            <Menu handleClick={handleNav} className="text-crema">
              <LuX size={"auto"} />
            </Menu>
          </div>

          <ul>
            {navbar.map(item => (
              <li
                key={item.id}
                className="p-4 hover:bg-crema duration-300 hover:text-oscuro cursor-pointer text-crema"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  )
}

export default Navbar;
