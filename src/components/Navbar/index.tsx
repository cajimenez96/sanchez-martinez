import React, { ReactNode, useState } from "react"
import { LogoNav } from "../SvgIcons";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { LuX } from "react-icons/lu";
import { navbar, navbarMobile } from "../../helpers/constants";
import Button from "../Button";
import Dropdown from "../Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "../../utils/navigation";
import Accordion from "../Accordion";
import Text from "../Text";
import { normalizeLink } from "../../helpers/helper";

interface MenuProps {
  children: ReactNode;
  className?: string;
  handleClick: () => void;
}

interface ItemOptionProps {
  options: any;
  title: string;
}

interface ItemMobile {
  item: {
    name: string;
    path: string;
    id: number;
  };
  handleClick: () => void;
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
          <Accordion key={index} title={option.name} classNameTitle="ps-3">
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

const ItemMobile: React.FC<ItemMobile> = ({item, handleClick}) => {
  const navigation = useNavigate();

  const redirect = (path: string, id?: number) => {
    const link = normalizeLink(path, id);
    navigation(link);
    handleClick();
  }

  return (
    <li className="p-4 border-b border-b-mapuche cursor-pointer duration-300">
      {item.dropdown ? (
        <>
          <Text className="text-center text-base mb-2">{item.name}</Text>
          {item.dropdownMenu.map(i => (
            <Text key={i.id} className="py-2 text-oscuro text-sm" onClick={() => redirect(i.path, i.id)}>
              {i.name}
            </Text>
          ))} 
        </>
        ) : (
      <Text
        onClick={() => redirect(item.path)}
        className="text-oscuro hover:text-naranja hover:underline text-base"
      >
        {item.name}
      </Text>
      )}
    </li>
  );
  
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
            className="mx-4 m-2 text-oscuro duration-300"
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

      <Menu handleClick={handleNav} className="text-naranja duration-250">
        {nav ? <FiMenu size={30} /> : <LuX size={30} />} 
      </Menu>

      <div
        className={`h-auto w-3/4 pb-5 z-50 top-20 md:hidden fixed ease-in-out text-end bg-blanco rounded-s-md shadow-xl
        ${nav ? 'right-[-100%]' : 'right-0' } duration-500`}
      >
        <ul className="mb-5 ms-12">
          {navbarMobile.map(item => (
            <ItemMobile item={item} key={item.id} handleClick={handleNav} />
          ))}
        </ul>

        <div className="ms-12 me-2">
          <Button buttonStyle="switch">
            Noticias
            <FiArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
