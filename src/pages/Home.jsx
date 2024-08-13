import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState([])
  const postsRef = collection(db, "posts");
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((document) => ({ ...document.data(), id: document.id })));
    }
    console.log("----")
    getPosts();
  }, [toggle]);
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
      ))}
    </section>
  );
};

export default Home;
