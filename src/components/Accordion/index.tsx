import { ReactNode, useState } from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import Reveal from "../Reveal";

interface AccordionProps {
  title: string;
  children: ReactNode;
  classNameTitle?: string;
  classNameChildren?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title, classNameTitle, classNameChildren }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSelf = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <span className={`flex items-center gap-2 text-base w-full text-left hover:text-naranja cursor-pointer ${classNameTitle}`} onClick={toggleSelf}>
        {title}
        {open ? <BiSolidDownArrow /> : <BiSolidRightArrow /> }
      </span>
      
      <div className={`cursor-pointer z-50 ${classNameChildren} duration-150`}>
        {open && (<Reveal>{children}</Reveal>)}
      </div>
    </>
  );
};
export default Accordion;
