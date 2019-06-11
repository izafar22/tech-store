import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icons" onClick={handleSidebar} />
              <img src={logo} alt="text-store-logo" width="65px" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icons" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--mainGrey);
  padding: 1rem 1.5rem;
  z-index: 1;
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1920px;
    margin: 0 auto;
  }
  .nav-icons {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
    top: 0;
    right: 0;
  }

  .cart-items {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    border-radius: 50%;
    padding: 0 5px;
  }
`;
