import { ReactNode, useState } from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSelf = () => {
    setOpen(!open);
  };

  return (
    <>
      <span className="flex items-center gap-2 px-3 text-base w-full text-left hover:text-naranja cursor-pointer" onClick={toggleSelf}>
        {title}
        {open ? <BiSolidDownArrow /> : <BiSolidRightArrow /> }
      </span>
      
      <div className={`cursor-pointer z-50`}>
        {open && (children)}
      </div>
    </>
  );
};
export default Accordion;
