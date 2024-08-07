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
import Alert from "../../components/Alert";
import { useEffect, useState } from "react";
import Motion from "../../components/Motion";
import Spinner from "../../components/Spinner";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<"warning" | "success" | "error">("warning");
  const [stateAlert, setStateAlert] = useState({title: '', message: ''});

  const numericId = id ? parseInt(id, 10) : null;

  const handleChangeSelect = (e?: Option) => {
    formik.setFieldValue('subject', e? e.value : '')
  }

  const formik = useFormik<FormData>({
    initialValues: INITIAL_STATE,
    validationSchema: contactSchema,
    onSubmit: async (form: FormData) => {
      setLoading(true);
      await sendEmail(form)
      .then((res) => {
        setAlertType('success');
        setStateAlert({
          title: 'Éxito!',
          message: res.message
        });
      })
      .catch(() => {
        setAlertType('error');
        setStateAlert({
          title: 'Error!',
          message: "No se pudo enviar su mensaje, por favor intenta más tarde."
        })
      })
      .finally(() => {
        setShowAlert(!showAlert);
        setLoading(false);
      })
    }
  });

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);


  return (
    <div className="md:mt-10">
      <Container className={`flex justify-center items-center min-h-[70vh] py-10`}>
        <Section className="mx-5 md:mx-0 w-full lg:w-2/5 rounded-xl py-10 px-5 bg-blanco">
        <Motion>
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

              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-2/5">
                  <Button buttonStyle="outline" className="text-oscuro" type="submit" disabled={loading}>
                    {loading ? (
                      <Spinner />
                    ) : 'Enviar'}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Motion>
        </Section>
      </Container>
      <div className={`w-full lg:w-1/4 ${showAlert && 'fixed'} top-5 right-0 z-50 duration-150`}>
        <Alert visible={showAlert} type={alertType} title={stateAlert.title} message={stateAlert.message} />
      </div>
    </div>
  )
}

export default Contact;
