import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import { LinkType, SectionTitles } from "../../helpers/interfaces";
import { Link } from "react-router-dom";

interface AccordionProps {
  title: string;
  elements: LinkType[];
  handleSelect: (value: SectionTitles) => void;
}

const Accordion = ({ elements, title, handleSelect }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);


  const toggleSelf = () => {
    setOpen(!open);
  };

  const select = (data) => {
    handleSelect(data);
  }

  return (
    <>
      <span className="flex items-center gap-2 px-3 py-2 text-base w-full text-left hover:text-naranja cursor-pointer" onClick={toggleSelf}>
        {title}
        {open ? <BiSolidDownArrow /> : <BiSolidRightArrow /> }
      </span>
      
      <div className={`cursor-pointer z-50`}>
        <ul>
          {open ? (
            elements.map((element, index) => (
              <li key={index} onClick={() => select(element)} className="mb-2 ps-3 hover:text-naranja text-base font-light">
                <Link to={`${element.path}/${element.id}`}>
                  {element.name} 
                </Link>
              </li>
            ))
          ) : null}
        </ul>
      </div>
    </>
  );
};
export default Accordion;