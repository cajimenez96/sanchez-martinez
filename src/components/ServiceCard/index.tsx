import { Service } from "../../helpers/interfaces";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import { FaAngleDoubleRight } from "react-icons/fa";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({service}: ServiceCardProps) => {
  return (
    <div className="h-36 p-4 border border-naranja rounded-xl flex justify-between items-center hover:bg-naranja cursor-pointer group duration-200">
      <div className="w-[75%] h-full pt-2 flex flex-col">
        <Heading className="uppercase text-oscuro group-hover:text-crema font-bold text-base md:text-xl mb-5">
          {service.name}
        </Heading>

        <Text
          className="font-normal text-oscuro group-hover:text-crema text-xs md:text-base line-clamp-2"
        >
          {service.description}
        </Text>
      </div>
      <div className="flex justify-items-end justify-end items-start h-full">
        <div>
          <Button className="underline group-hover:text-crema text-xs md:text-base whitespace-nowrap">
            Leer más
            <FaAngleDoubleRight className="text-transparent group-hover:text-crema" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
