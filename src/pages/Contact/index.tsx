import { useState } from "react";
import Container from "../../components/Container";
import Input from "../../components/Input";
import CustomSelect from "../../components/CustomSelect";
import Button from "../../components/Button";
import styles from './contact.module.css';
import Heading from "../../components/Heading";
import { contact } from "../../helpers/constants";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  
  return (
    <div className="md:mt-10">
      <div className={`flex justify-center items-center min-h-[70vh] py-10 ${styles.bgContact}`}>
        <Container className="mx-5 md:mx-0 md:w-2/5 rounded-xl py-10 px-5">
          <div className="text-center">
            <Heading level={5} className="font-semibold text-2xl md:text-4xl">Formulario de contacto</Heading>
            <p className="text-crema mt-5 mb-10">Deja tu consulta, nos comunicaremos a la brevedad.</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <Input label={contact.nombre.label} type={contact.nombre.inputType} placeholder={contact.nombre.placeholder} />
              <Input label={contact.apellido.label} type={contact.apellido.inputType} placeholder={contact.apellido.placeholder} />
            </div>
            <Input label={contact.correo.label} type={contact.correo.inputType} placeholder={contact.correo.placeholder} />
            
            <CustomSelect
              options={contact.asunto.options}
              placeholder={contact.asunto.placeholder}
              onChange={handleSelectChange}
            />

            <Input label={contact.mensaje.label} type={contact.mensaje.inputType} placeholder="" />

            <div className="flex justify-center items-center">
              <Button buttonStyle="outline" className="w-2/5">
                Enviar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Contact;
