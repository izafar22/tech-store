import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpg";
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <>
      <Hero max="true" img={defaultBcg} title="404">
        <h2 className="text-capitalize">Page not found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          return Home
        </Link>
      </Hero>
    </>
  );
}
