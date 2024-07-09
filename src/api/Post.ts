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
  createdAt: Date;
  updatedAt: Date;
}

export const getPosts = async (): Promise<IPost[]> => {
  const response = await Axios.get('/post');
  return response.data;
};
