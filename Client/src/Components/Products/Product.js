import React from "react";

const ProductShell = props => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="productimg" src={props.image} />
        <div className="card-body">
          <p className="card-text"> {props.name}</p>
          <div className="d-flex justify-content-between  align-items-center">
            <div className="btn-group">
              <button type="button" className=" btn btn-warning">
                Learn More!
                {props.price}
              </button>
              <a href="contact.html">
                {" "}
                <button
                  href="contact.html"
                  type="button"
                  className="btn btn-info"
                >
                  {" "}
                  Buy now!
                  {props.Description}
                </button>
              </a>
            </div>
            <small className="text-muted">299$</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShell;
