import { getPosts } from "../../api/Post";

export const getAllPosts = async () => {
  try {
    const res = await getPosts();
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};