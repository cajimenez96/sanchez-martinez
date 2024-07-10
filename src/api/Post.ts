import Axios from "../lib/axios";

export interface IPost {
  _id: string;
  title: string;
  content: string;
  images: string[];
  front: string;
  location: string;
  category: string;
  author: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export const getPosts = async (): Promise<IPost[]> => {
  const response = await Axios.get('/post');
  return response.data;
};

export const getPostById = async (id: string): Promise<IPost> => {
  const response = await Axios.get(`/post/${id}`);
  return response.data;
};

