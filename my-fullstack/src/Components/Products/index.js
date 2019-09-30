import React from "react";
import Productheader from "./productheader";
import Productlist from "./Productlist";

const productsEndpoint = "localhost:5000/allPhones";
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
    return (
      <React.Fragment>
        <Productheader />
        <Productlist />
      </React.Fragment>
    );
  }
}
export default Product;
