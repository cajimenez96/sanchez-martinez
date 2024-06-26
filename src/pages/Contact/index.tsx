import Container from "../../components/Container";
import Input from "../../components/Input";
import CustomSelect from "../../components/CustomSelect";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { contact } from "../../helpers/constants";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { contactSchema } from "../../helpers/helper";
import { FormData } from "../../helpers/interfaces";
import { sendEmail } from "./require";
import Section from "../../components/Section";
import Text from "../../components/Text";

interface Option {
  value: string;
  label: string;
  id: number;
}

const INITIAL_STATE: FormData = {
  name: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
}

const Contact = () => {
  const { id } = useParams<{ id: string }>();

  const numericId = id ? parseInt(id, 10) : null;

  const handleChangeSelect = (e?: Option) => {
    formik.setFieldValue('subject', e? e.value : '')
  }

  const formik = useFormik<FormData>({
    initialValues: INITIAL_STATE,
    validationSchema: contactSchema,
    onSubmit: async (form: FormData) => {
      const response = await sendEmail(form);
      console.log('envio: ', response);
      
    }
  })
  
  
  return (
    <div className="md:mt-10">
      <Container className={`flex justify-center items-center min-h-[70vh] py-10`}>
        <Section className="mx-5 md:mx-0 md:w-2/5 rounded-xl py-10 px-5 bg-blanco">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-center">
              <Heading level={5} className="font-semibold text-2xl md:text-4xl text-oscuro">Formulario de contacto</Heading>
              <Text className="text-oscuro mt-5 mb-10">Deja tu consulta, nos comunicaremos a la brevedad.</Text>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap xl:flex-nowrap flex-col md:flex-row gap-5 text-oscuro">
                <Input
                  label={contact.nombre.label}
                  id={contact.nombre.id}
                  name={contact.nombre.name}
                  type={contact.nombre.inputType}
                  handleChange={formik.handleChange}
                  error={formik.errors.name}
                  hasError={formik.touched.name}
                  placeholder={contact.nombre.placeholder}
                />

                <Input
                  label={contact.apellido.label}
                  id={contact.apellido.id}
                  name={contact.apellido.name}
                  type={contact.apellido.inputType}
                  handleChange={formik.handleChange}
                  error={formik.errors.lastName}
                  hasError={formik.touched.lastName}
                  placeholder={contact.apellido.placeholder}
                />
              </div>
              <Input
                label={contact.correo.label}
                id={contact.correo.id}
                name={contact.correo.name}
                type={contact.correo.inputType}
                handleChange={formik.handleChange}
                error={formik.errors.email}
                hasError={formik.touched.email}
                placeholder={contact.correo.placeholder}
              />
              
              <CustomSelect
                value={numericId}
                options={contact.asunto.options}
                placeholder={contact.asunto.placeholder}
                handleChange={handleChangeSelect}
                error={formik.errors.subject}
                hasError={formik.touched.subject}
              />

              <Input
                label={contact.mensaje.label}
                id={contact.mensaje.id}
                name={contact.mensaje.name}
                placeholder={contact.mensaje.placeholder}
                type={contact.mensaje.inputType}
                handleChange={formik.handleChange}
                error={formik.errors.message}
                hasError={formik.touched.message}
              />

              <div className="w-full flex justify-center items-center">
                <div className="w-2/5">
                  <Button buttonStyle="outline" className="text-oscuro border-oscuro" type="submit">
                    Enviar
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Section>
      </Container>
    </div>
  )
}

export default Contact;
