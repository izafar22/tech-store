import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, handleCart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>Card items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.nav`
  position: fixed;
  top: 100px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => {
    return props.show ? "translateX(0)" : "translateX(100%)";
  }};
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
