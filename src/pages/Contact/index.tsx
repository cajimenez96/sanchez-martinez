import { useState } from "react";
import Container from "../../components/Container";
import Input from "../../components/Input";
import CustomSelect from "../../components/CustomSelect";
import Button from "../../components/Button";
import styles from './contact.module.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  
  return (
    <div className="mt-10">
      <div className={`flex justify-center items-center min-h-[70vh] py-10 ${styles.bgContact}`}>
        <Container className="w-2/5 rounded-xl py-10 px-5">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <Input label="Nombre" placeholder="Tú nombre" />
              <Input label="Apellido" placeholder="Tú apellido" />
            </div>
            <Input label="Correo electrónico" placeholder="Tú correo electrónico" type="email" />
            
            <CustomSelect
              options={options}
              placeholder="Seleccione un asunto"
              name="subject"
              onChange={handleSelectChange}
            />

            <Input label="Mensaje" placeholder="" type="textarea" />

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
