import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
      ;
    </TitleWrapper>
  );
}

const TitleWrapper = styled.nav`
  text-align: ${props => {
    return props.center ? "center" : "left";
  }};
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props => {
      return props.center ? "0 auto" : "0";
    }};
  }
`;
