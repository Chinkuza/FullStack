import React from "react";
import ProductsBlob from "./products.json";
import ProductShell from "./Product";

class Productslist extends React.Component {
  state = {
    products: ProductsBlob.products
  };

  handleFilter = y => {
    let newItems = [];

    if (y === "no filter") {
      newItems = newItems.concat(ProductsBlob.products);
    }

    if (y === "iphone") {
      newItems = ProductsBlob.products.filter(product => {
        return product.description.includes("iphone");
      });
    }

    if (y === "LG") {
      newItems = ProductsBlob.products.filter(product => {
        return product.description.includes("LG");
      });
    }

    if (y === "Samsung") {
      newItems = ProductsBlob.products.filter(product => {
        return product.description.includes("Samsung");
      });
    }
    this.setState({
      products: newItems
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleFilter("no filter")}>
            No filter
          </button>
          <button onClick={() => this.handleFilter("iphone")}>Iphones</button>
          <button onClick={() => this.handleFilter("Samsung")}>Samsung</button>
          <button onClick={() => this.handleFilter("LG")}>LG</button>
        </div>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {this.state.products
                ? this.state.products.map(product => (
                    <ProductShell
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productslist;
