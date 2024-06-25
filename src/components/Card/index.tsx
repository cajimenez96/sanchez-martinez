import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({className, children}) => {
  return (
    <div className={`w-[350px] md:w-[400px] lg:mx-10 group cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

export default Card;
