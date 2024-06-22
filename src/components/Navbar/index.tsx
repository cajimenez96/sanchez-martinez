import { ReactNode, useState } from "react"
import { LogoNav } from "../SvgIcons";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { LuX } from "react-icons/lu";
import { navbar } from "../../helpers/constants";
import Button from "../Button";
import Dropdown from "../Dropdown";
import { NavbarItemMenu } from "../../helpers/interfaces";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "../../utils/navigation";
import Accordion from "../Accordion";

interface MenuProps {
  children: ReactNode;
  className?: string;
  handleClick: () => void;
}

interface ItemOptionProps {
  options: any;
  title: string;
}

const Menu: React.FC<MenuProps> = ({children, handleClick, className}) => {
  return (
    <div onClick={handleClick} className={`block md:hidden w-9 h-9 cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

const ItemOption: React.FC<ItemOptionProps> = ({options, title}) => {
  const navigation = useNavigate();

  return (
    <Dropdown placeholder={title}>
      {options.map((option, index) => (
        option.options.length > 0 ? (
          <Accordion key={index} title={option.name}>
            <ul>
              {option.options.map((e) => (
                <li className="mt-1 ps-3 hover:text-naranja text-base font-light">
                  <Link to={`${e.path}/${e.id}`}>
                    {e.name} 
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
        ) : (
        <button
          key={index}
          onClick={() => navigation(option.path)}
          className="flex items-center gap-2 px-3 pb-2 mt-1 text-base w-full text-left hover:text-naranja"
          role="menuitem"
        >
          {option.name}
        </button>
        )
      ))}
    </Dropdown>
  )
}

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between md:justify-around items-center h-24 px-4 mt-4">
      <Link to={Navigation.home}>
        <LogoNav />
      </Link>

      <ul className="hidden md:flex">
        {navbar.map(item => (
          <li
            key={item.id}
            className="mx-4 m-2 duration-300 text-oscuro"
          >
            {item.dropdown && item.dropdownMenu ?
                <ItemOption options={item.dropdownMenu} title={item.name} />
              : (
                <Button link href={item.path} buttonStyle="link">{item.name}</Button>
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
        <FiMenu size={24} />
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
              <LuX size={24} />
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
