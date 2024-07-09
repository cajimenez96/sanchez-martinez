import { ReactNode } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { standarDate } from "../../helpers/helper";
import Heading from "../Heading";
import Text from "../Text";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardBodyProps {
  title?: string;
  text: string;
  image: string;
  date?: string;
  classText?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  title,
  text,
  image,
  date,
  classText
}) => {
  return (
    <div className="mx-5 flex flex-col gap-5 group">
        <img src={image} alt={title} />

        <div className="flex justify-between">
          <div className="flex items-center gap-2 cursor-pointer font-light text-sm text-mapuche group-hover:border-mapuche border-b border-transparent">
            Leer más
            <FaAngleDoubleRight />
          </div>
          <Text className="font-light text-sm">
            {date && standarDate(date)}
          </Text>
        </div>

        <div className="text-oscuro">
          <Heading level={5} className={`mb-2 font-bold text-lg md:text-xl ${classText}`}>
            {title}
          </Heading>
          <Text className={`text-base line-clamp-3 ${classText}`}>
            {text}
          </Text>
        </div>
      </div>
  );
}

const Card: React.FC<CardProps> = ({className, children}) => {
  return (
    <div className={`w-[350px] md:w-[400px] max-h-[520px] text-ellipsis lg:mx-10 group cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

export default Card;
