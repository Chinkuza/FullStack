process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../Server.js");
let should = chai.should;
let expect = chai.expect;
chai.use(chaiHttp);

describe("/GET:id product", () => {
  it("GETs product by Id", () => {
    should("it should GET a product by the given ID", done => {
      chai
        .request("http://localhost:4000")
        .get("/allPhones")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("array");

          done();
        });
    });
  });
});

describe("/allPhones", () => {
  it("GETs allPhones", () => {
    should("it should GET all Phones", done => {
      chai
        .request("http://localhost:4000")
        .get("/allPhones")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("array");

          done();
        });
    });
  });
});

describe("/", () => {
  it("should be home page", () => {
    should("it should go home", done => {
      chai
        .request("http://localhost:4000")
        .get("/")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("");

          done();
        });
    });
  });
});

describe("/Contacts", () => {
  it("GETs Contacts", () => {
    should("it should GET the contacts", done => {
      chai
        .request("http://localhost:4000")
        .get("/contacts")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("array");

          done();
        });
    });
  });
});

// describe("/POST contact", () => {
//   it("it should POST a contact", done => {
//     let contact = {
//       first_name: "Juan",
//       last_name: "Rosario",
//       contact_email: "the@test.com",
//       contact_address: "123 ABC Street",
//       city: "Charlotte",
//       zipcode: "28205",
//       state: "NC",
//       phone: "704-123-1234"
//     };

//     chai
//       .request("http://localhost:3000/api")
//       .post("/contacts")
//       .send(contact)
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });
