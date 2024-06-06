import React from 'react';
import { LogoNav } from '../SvgIcons';
import { navbar } from '../../helpers/constants';
import { NavbarItem } from '../../helpers/interfaces';
import { Dropdown, DropdownItem } from 'flowbite-react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const Drop = ({name}: {name: string}) => {
  return (
    <Dropdown label={name} inline arrowIcon>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
};

const Nav = () => {
  return (
    <Navbar fluid className="p-5">
      <NavbarBrand>
      <LogoNav />

      </NavbarBrand>
      <div className="flex md:order-2">
        <button>Noticias</button>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="text-oscuro md:block">
        {navbar.map((element: NavbarItem) => (
          !element.dropdown ? (
            <NavbarLink href={element.path} className="text-oscuro">{element.name}</NavbarLink>
          ) : (
            <Drop name={element.name} />
          )
        ))
        }
      </NavbarCollapse>
    </Navbar>
    
  )
}

export default Nav;
