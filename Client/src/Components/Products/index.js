import React from "react";
import Productheader from "./productheader";
import fetch from "isomorphic-fetch";
import ProductShell from "./Product";

const productsEndpoint = "/products";
const initialState = {
  products: [],
  //all our filters
  filtered: false,
  filteredArray: [],
  error: false
};

class Product extends React.Component {
  state = initialState;

  //didmount is invoked immediately after a component is mounted
  async componentDidMount() {
    try {
      const data = await fetch(productsEndpoint);
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

  handleFilter = filter => {
    const allProducts = this.state.products.slice();

    if (filter == "no filter") {
      this.setState({
        filtered: false
      });
      //get out, no need to keep going
      return;
    }

    //if true keep it in the array if not lets get rid of it
    const filteredArray = allProducts.filter(product => {
      return product.Names.toUpperCase().includes(filter.toUpperCase());
    });

    this.setState({
      filteredArray: filteredArray,
      filtered: true
    });
  };

  render() {
    //EmPTY VARIABLE FOR FUTURRE
    let products;

    if (this.state.filtered && this.state.filteredArray.length === 0) {
      products = <p>"Sorry no results found"</p>;
    } else if (this.state.filtered) {
      products = this.state.filteredArray.map((product, i) => (
        <ProductShell
          key={i}
          image={product.URl}
          name={product.Names}
          price={product.Price}
        />
      ));
    } else {
      products = this.state.products.map((product, i) => (
        <ProductShell
          key={i}
          image={product.URl}
          name={product.Names}
          price={product.Price}
        />
      ));
    }

    return (
      <React.Fragment>
        <Productheader />
        <div className="container">
          <div className="row">
            <button onClick={() => this.handleFilter("no filter")}>
              No filter
            </button>
            <button onClick={() => this.handleFilter("iphone")}>Iphones</button>
            <button onClick={() => this.handleFilter("Samsung")}>
              Samsung
            </button>
            <button onClick={() => this.handleFilter("LG")}>LG</button>
          </div>
          <div className="row">{products}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
