import { sendEmailRequest } from "../../api/Contact";
import { FormData } from "../../helpers/interfaces";

export const sendEmail = async (form: FormData) => {
  await sendEmailRequest(form)
  .then((res) => {
    console.log('respuesta: ', res);
  })
  .catch((err) => console.log('errror: ', err)
  )
  
}