import React, { useState, useEffect, useRef } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import Button from '../Button';
import { NavbarItemMenu } from '../../helpers/interfaces';
import Accordion from '../Accordion';

interface DropdownProps {
  placeholder: string;
  options: NavbarItemMenu[];
  onSelect: (option: NavbarItemMenu) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder }) => {
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
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-s-xl rounded-e-xl rounded-ss-none bg-blanco shadow-md z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              option.options.length > 0 ? (
                <Accordion title={option.name} elements={option.options} handleSelect={() => onSelect(option)} />
              ) : (
              <button
                key={index}
                onClick={() => onSelect(option)}
                className="flex items-center gap-2 px-3 py-2 text-base w-full text-left hover:text-naranja"
                role="menuitem"
              >
                {option.name}
              </button>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
