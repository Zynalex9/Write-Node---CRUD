import React from "react";
import { db,auth } from "../firebase/config";
import { doc,deleteDoc } from "firebase/firestore";

const PostCard = ({ post, toggle, setToggle }) => {
  const { id,title, description, authorInfo } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  async function  handleDelete(event) {
    const document = doc(db, "posts", id )
    await deleteDoc(document)
    setToggle(!toggle)
  }


  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">
          {authorInfo?.authorName || "Unknown Author"}
        </span>
        {isAuth && authorInfo?.authorID === auth.currentUser?.uid && (
          <span className="delete" onClick={handleDelete}>
            <i className="bi bi-trash3"></i>
          </span>
        )}
      </p>
    </div>
  );
};

export default PostCard;
