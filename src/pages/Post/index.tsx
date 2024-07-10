import { useEffect, useState } from "react";
import { IPost } from "../../api/Post";
import { Link, useParams } from "react-router-dom";
import { getPost } from "./require";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Heading from "../../components/Heading";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Motion from "../../components/Motion";
import Reveal from "../../components/Reveal";

const INITIAL_STATE = {
  _id: "",
  title: "",
  content: "",
  images: [],
  front: "",
  location: "",
  category: "",
  author: "",
  source: "",
  createdAt: "",
  updatedAt: "",
}

const Post: React.FC = () => {
  const { id } = useParams<string>();

  const [post, setPost] = useState<IPost>(INITIAL_STATE);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} de ${month}, ${year} | ${hours}:${minutes}`;
  }

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(id ?? "");
      setPost(res);
    }

    fetchPost();
    
  }, []);

  return (
    <Section className="mx-auto pt-10 px-5 grid grid-cols-1 md:grid-cols-2 gap-20 content-center">
      <div>
        <Motion>
          <img src={post.front} />
        </Motion>
        <Reveal>
          <Text className="mt-5 text-oscuro text-xl uppercase">{formatDate(post.createdAt)}</Text>
          <Text className="mt-10 text-oscuro">FUENTE:
            <Link to={post.source} className="hover:text-naranja line-clamp-2"> {post.source}</Link>
          </Text>
        </Reveal>
      </div>
      <div className="flex flex-col items-center">
        <Reveal>
          <Heading level={5} className="flex items-center gap-2 mt-1 uppercase text-oscuro text-xl">
            <FaArrowRightLong />
            {post.location}, {post.category}
          </Heading>

          <div className="mt-10 mb-12 max-w-xl">
            <Heading level={5} className="text-oscuro text-2xl">{post.title}</Heading>
            <Text className="mt-10 text-oscuro whitespace-pre-wrap">
              {post.content}
            </Text>
          </div>

          <div className="ms-2 flex gap-8">
            <div className="w-24 h-24 p-1 rounded-xl bg-naranja flex justify-center items-center">
              <FaRegUser className="text-blanco w-full h-full" />
            </div>
            <div>
              <Text className="text-naranja">Autor de redacción:</Text>
              <Text className="uppercase text-naranja">{post.author}</Text>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export default Post;
