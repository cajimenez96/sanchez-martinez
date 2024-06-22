import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import Button from '../Button';
import { NavbarItemMenu } from '../../helpers/interfaces';

interface DropdownProps {
  placeholder: string;
  options?: NavbarItemMenu[];
  children?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <Button handleClick={handleToggle}>
          {placeholder}
          <BiSolidDownArrow />
        </Button>

      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute left-0 w-56 rounded-b-xl bg-blanco shadow-md z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div role="none">
            {children ?
              children
            : (
              <ul>
                {options?.map((option, index) => (
                  <li
                    key={index}
                    className="mb-2 ps-3 hover:text-naranja text-base font-light"
                    onClick={handleToggle}
                  >
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
