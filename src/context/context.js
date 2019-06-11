import React, { Component } from "react";
import { linkData } from "./linkData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 11,
    links: linkData,
    cart: []
  };
  //handle sidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };
  //handle sidecart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };
  //close cart
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  handleClick = () => {
    console.log("I was activated");
    this.setState({
      cartOpen: false,
      sidebarOpen: false
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          handleClick: this.handleClick
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
