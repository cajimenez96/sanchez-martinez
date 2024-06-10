import React from "react"
import { NoticeResponse } from "../../helpers/interfaces";
import Button from "../Button";
import { FaAngleDoubleRight } from "react-icons/fa";
import { standarDate } from "../../helpers/helper";

interface NoticeCardProps {
  element: NoticeResponse;
}

const NoticeCard = ({element}: NoticeCardProps) => {
  return (
    <div className="w-[300px] m-5 flex flex-col gap-5" style={{flex: '1 0 100%'}}>
      <img src={element.image} alt={element.title} />

      <div className="flex justify-between">
        <div>
          <Button className="text-naranja hover:underline">
            Leer más
            <FaAngleDoubleRight />
          </Button>
        </div>
        <span className="text-sm text-crema">{standarDate(element.creationDate)}</span>
      </div>

      <div>
        <span className="text-crema text-base pl-3">{element.title}</span>
      </div>
    </div>
  )
}

export default NoticeCard;
