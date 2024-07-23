import { sendEmailRequest } from "../../api/Contact";
import { FormData } from "../../helpers/interfaces";

export const sendEmail = async (form: FormData) => {
  try {
    const res = await sendEmailRequest(form);
    return res;
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
}