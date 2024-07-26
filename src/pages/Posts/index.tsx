import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getAllPosts } from "./require";
import { IPost } from "../../api/Post";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../utils/navigation";
import Motion from "../../components/Motion";
import Spinner from "../../components/Spinner";

const Posts = () => {
  const navigation = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      
      const data = await getAllPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleClick = (post: IPost) => {
    navigation(Navigation.post+'/'+post._id)
  }

  const renderPosts = (allPost: IPost[]) => {
    return allPost.map((post: IPost) => (
      <div className="h-96 lg:w-[440px] mx-auto mb-10 p-1 overflow-hidden cursor-pointer group" key={post._id} onClick={() => handleClick(post)}>
        <div>
          <img src={post.front} className="w-full h-64" alt={post.title} />
          <p className="uppercase flex items-center gap-2 mt-1 text-oscuro group-hover:text-naranja">
            <FaArrowRightLong />
            {post.location}, {post.category}
          </p>
        </div>
        <div className="mt-2 line-clamp-3">
          <p>{post.content}</p>
        </div>
      </div>
    ))
  }

  return (
    <div className="mx-0 lg:mx-24">
      {loading && (
        <div className="w-full flex justify-center items-center h-[75vh]">
          <div>
            <Spinner />
          </div>
        </div>
      )}
      <Motion className="mx-auto mt-10 grid md:grid-cols-3 gap-0">
        {renderPosts(posts)}
      </Motion>
    </div>
  )
}

export default Posts;