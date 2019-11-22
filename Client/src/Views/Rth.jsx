import React from "react";
import axios from "axios";
import ProductShell from "../Components/Products/Product";
import products from "../Components/Products/Product";

class FetchProd extends React.Component {
  state = {
    products: []
  };

  async componentDidMount() {
    try {
      const data = await fetch("/products");
      const jsonData = await data.json();
      //Sets state to parsed json data
      this.setState({ products: jsonData }, () => {
        //logs to make sure state worked
        console.log(this.state.products);
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: true });
    }
  }

  render() {
    return <p>this.state.products.Names</p>;
  }
}

export default FetchProd;
