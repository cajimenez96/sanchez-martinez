import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Section from "../../components/Section";
import { getAllPosts } from "./require";
import { IPost } from "../../api/Post";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Section className="mx-auto grid grid-cols-3">
      {posts.map((post: IPost) => (
        <div className="h-96 w-[380px] hover:w-[385px] mx-auto mb-10 p-1 border-4 rounded-md border-oscuro-blur hover:border-oscuro duration-150 overflow-hidden shadow-lg cursor-pointer" key={post._id}>
          <div>
            <img src={post.front} className="w-full" alt={post.title} />
            <p className="uppercase flex items-center gap-2 mt-1">
              <FaArrowRightLong />
              {post.location}, {post.category}
            </p>
          </div>
          <div className="mt-2 max-h-auto whitespace-break-spaces text-ellipsis">
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </Section>
  )
}

export default Posts;
