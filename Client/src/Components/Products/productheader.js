import React from "react";

const Productheader = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">IN STOCK</h1>
        <p className="lead text-muted">
          {" "}
          If you order now we will promise you 3 day delivery!!{" "}
        </p>
        <p>
          <a href="#" className="btn btn-primary my-2">
            {" "}
            Sim cards are a thing of the past!!
          </a>
          <a
            href="https://www.apple.com/shop/refurbished/clearance"
            className="btn btn-secondary my-2"
          >
            {" "}
            Clearance
          </a>
        </p>
      </div>
    </section>
  );
};

export default Productheader;
