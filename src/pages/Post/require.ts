import { getPostById } from "../../api/Post";

export const getPost = async (id: string) => {
  try {
    const res = await getPostById(id);
    return res;
  } catch (error) {
    console.log(error);
    
  }
}