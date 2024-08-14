import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard, SkeletonCard } from "../components";
import useTitle from "../hooks/useTitle";
const Home = () => {
  useTitle("Home")
  const [posts, setPosts] = useState([false,false,false,false]);
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
      {posts.map((post,idx) => (
        post ? (
        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />) : (<SkeletonCard key={idx}/>)
      ))}
    </section>
  );
};

export default Home;
