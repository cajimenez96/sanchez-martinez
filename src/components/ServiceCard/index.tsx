import { Service } from "../../helpers/interfaces";
import Button from "../Button";
import Heading from "../Heading";
import { FaAngleDoubleRight } from "react-icons/fa";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({service}: ServiceCardProps) => {
  return (
    <div className="h-36 p-4 border border-naranja rounded-xl flex justify-between items-center">
      <div className="max-w-[75%]">
        <Heading className="uppercase text-oscuro font-surt-bold text-xl mb-5">
          {service.name}
        </Heading>
        <p className="text-oscuro font-surt-normal text-base">{service.description}</p>
      </div>
      <div>
        <Button className="underline">
          Leer más
          <FaAngleDoubleRight />
        </Button>
      </div>
    </div>
  )
}

export default ServiceCard;
