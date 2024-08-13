import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/images/page-not-found.jpg";
const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={NotFound} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}

export default PageNotFound;
