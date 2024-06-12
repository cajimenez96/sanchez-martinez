import { useState } from "react";
import Heading from "../Heading";
import Button from "../Button";
import { MdOutlineClose } from "react-icons/md";
import { Navigation } from "../../utils/navigation";

const Modal = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`${open ? 'fixed' : 'hidden'} bottom-16 right-[20%] z-50 w-[1024px] mx-auto`}>
      <div className="relative md:flex md:items-center md:justify-center w-full">
          <div className="h-auto md:h-full rounded-lg p-4 fixed inset-x-0 bottom-0 z-50 mx-auto md:relative shadow-lg w-full  border border-crema flex flex-col items-end bg-oscuro-blur backdrop-blur-xl">
            <button className="text-right cursor-pointer" onClick={() => setOpen(false)}>
              <MdOutlineClose className="text-crema" />
            </button>
            <div className="w-full">
              <div className="md:flex items-center">
                <div className="w-full mb-5">
                  <Heading level={5} className="font-black text-center text-crema text-lg md:text-4xl mb-3">
                    ¿Necesitas asesoramiento?
                  </Heading>
                  <p className=" text-sm md:text-base text-crema mt-1 text-center">
                  Estamos para responder todas tus dudas. No dudes en ponerte en contacto con nosotros.
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-10">
                <div>
                  <Button
                    buttonStyle="outline"
                    link
                    href={Navigation.contact}
                    className="text-sm">
                    Consultar ahora
                  </Button>
                </div>
                <div>
                  <Button buttonStyle="outline" className="text-sm">
                    Escríbenos por WhatsApp
                  </Button>
                </div>

              </div>

            </div>
        </div>
      </div>
    </div>
  )
}


export default Modal;