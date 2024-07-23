import { getPosts } from "../../api/Post";

export const getAllPosts = async () => {
  try {
    const res = await getPosts();
    console.log('respuesta: ', res);
    
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};