import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { SectionTitles } from "../../helpers/interfaces";

interface AccordionProps {
  title: string;
  elements: SectionTitles[];
  handleSelect: (value: SectionTitles) => void;
}

const Accordion = ({ elements, title, handleSelect }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);


  const toggleSelf = () => {
    console.log('ausilioo');
    setOpen(!open);
  };

  const select = (data) => {
    console.log(data);
    handleSelect(data);
  }

  return (
    <>
      <span className="flex items-center gap-2 px-4 py-2 text-base w-full text-left hover:text-naranja cursor-pointer" onClick={toggleSelf}>
        {title}
        <BiSolidDownArrow />
      </span>
      
      <div className={`cursor-pointer z-50`}>
        <ul>
          {open ? (
            elements.map((element, index) => (
              <li key={index} onClick={() => select(element)} className="mb-2 ps-3 hover:text-naranja text-base font-light">
                {element.name}
              </li>
            ))
          ) : null}
        </ul>
      </div>
    </>
  );
};
export default Accordion;