import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Info from "../components/AboutPage/Info";
import aboutBcg from "../images/aboutBcg.png";
export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg}>Hello from Aboout page</Hero>
      <Info />
    </>
  );
}
