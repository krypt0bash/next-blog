import { SessionContext } from "@utils/SessionContext";
import { supabase } from "@utils/supabase";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import defaultPost from "../public/defaultuser.webp";

const Posts = () => {
  const { session } = useContext(SessionContext);
  const [posts, setPosts] = useState<any[] | null>(null);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await supabase.from("posts").select("*");
      setPosts(data);
    };
    getPosts();
  }, [session]);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto w-4/5">
      {posts?.map((post) => (
        <div key={post.id} className="bg-neutral-100 rounded-lg relative h-fit">
          <img
            src={post.image}
            className={"rounded-lg rounded-b-none w-full h-32 bg-cover"}
          />
          <div className="p-4 h-32">
            <h1>{post.title}</h1>
            <p className="line-clamp-3 text-ellipsis block ...">
              {post.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
