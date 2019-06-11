import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpg";

export default function Hero({ children, img, title, max }) {
  //const { children } = props;
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.nav`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => {
    return props.max ? "100vh" : "60vh";
  }};
  background: red;
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => {
        return props.img;
      }})
      center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px var(--primaryRGBA);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg
};
