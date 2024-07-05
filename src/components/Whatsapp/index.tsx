import { images } from "../../utils/images";

interface IWhatsapp {
  tel: number
}

const Whatsapp: React.FC<IWhatsapp> = ({tel}) => {

  const handleClick = () => {
    window.open(`https://wa.me/${tel}?text=Hola, me gustaría hacer una consulta!`, '_blank')
  };

  return (
    <div className="fixed bottom-4 left-[95%] z-50 w-full mx-auto" onClick={handleClick}>
      <div className="w-16 p-2 rounded-xl flex justify-center items-center bg-blanco-blur shadow-md cursor-pointer">
        <img src={images.whatsapp} alt="Whatsapp" width={50} />
      </div>
    </div>
  )
}

export default Whatsapp;
