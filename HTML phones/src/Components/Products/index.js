import React from "react";
import Productheader from "./productheader";
import fetch from "isomorphic-fetch";
import ProductShell from "./Product";

const productsEndpoint = "http://localhost:3022/allPhones";
const initialState = {
  products: [],
  error: false
};
export class Product extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  async componentDidMount() {
    try {
      const data = await fetch(productsEndpoint);
      const jsonData = await data.json();
      this.setState({ products: jsonData }, () => {
        console.log(this.state.products);
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: true });
    }
  }
  render() {
    const products = this.state.products.map(product => (
      <ProductShell
        image={product.image}
        name={product.Names}
        price={product.price}
      />
    ));
    return (
      <React.Fragment>
        <Productheader />
        {products}
      </React.Fragment>
    );
  }
}
export default Product;
