import React from "react";
import { ProductConsumer } from "../context";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Featured from "../components/HomePage/Featured";
import Services from "../components/HomePage/Services";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome Gadgets" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
