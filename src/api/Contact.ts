import { FormData } from "../helpers/interfaces";
import Axios from "../lib/axios";


export const sendEmailRequest = async (
  payload: FormData
) => {
  const response = await Axios.post('/contact', payload);
  return response.data;
};
