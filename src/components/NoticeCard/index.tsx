import { NoticeResponse } from "../../helpers/interfaces";
import { FaAngleDoubleRight } from "react-icons/fa";
import { standarDate } from "../../helpers/helper";
import Text from "../Text";

interface NoticeCardProps {
  element: NoticeResponse;
}

const NoticeCard = ({element}: NoticeCardProps) => {
  return (
    <div className="w-[350px] md:w-[400px] lg:mx-10 group cursor-pointer">
      <div className="mx-5 flex flex-col gap-5">
        <img src={element.image} alt={element.title} />

        <div className="flex justify-between">
          <div className="flex items-center gap-2 cursor-pointer font-light text-sm text-blanco border-b border-transparent group-hover:text-naranja hover:border-naranja">
            Leer más
            <FaAngleDoubleRight />
          </div>
          <Text className="font-light text-sm">
            {standarDate(element.creationDate)}
          </Text>
        </div>

        <div>
          <span className="text-crema text-base">{element.title}</span>
        </div>
      </div>
    </div>
  )
}

export default NoticeCard;
