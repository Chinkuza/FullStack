process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../Server.js");
let should = chai.should();

chai.use(chaiHttp);

describe("/GET:id product", () => {
  it("it should GET a product by the given ID", done => {
    chai
      .request("http://localhost:4001/api")
      .get("/products")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("/GET contact", () => {
  it("it should GET all of the contacts", done => {
    chai
      .request("http://localhost:4001/api")
      .get("/contacts")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("/POST contact", () => {
  it("it should POST a contact", done => {
    let contact = {
      first_name: "Juan",
      last_name: "Rosario",
      contact_email: "the@test.com",
      contact_address: "123 ABC Street",
      city: "Charlotte",
      zipcode: "28205",
      state: "NC",
      phone: "704-123-1234"
    };

    chai
      .request("http://localhost:3000/api")
      .post("/contacts")
      .send(contact)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
