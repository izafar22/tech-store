import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 11,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false
  };
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    // console.log(storeProducts);
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };

  componentDidMount() {
    //from contentfull items
    this.setProducts(items);
  }
  //get cart from local Storage
  getStorageCart = () => {
    return [];
  };

  getTotals = () => {};
  //addTotals
  addTotals = () => {};

  //sync storage
  syncStorage = () => {};

  //add to cart
  addToCart = id => {
    console.log("addtocart", id);
  };

  //set single product
  setSingleProduct = id => {
    console.log("setSingle", id);
  };
  //get Product from local Storage
  getStorageProduct() {
    return [];
  }
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
          handleClick: this.handleClick,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
