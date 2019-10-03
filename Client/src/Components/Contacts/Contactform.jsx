import React from "react";

function ContactForms() {
  return (
    <React.Fragment>
      <div className="container4">
        <div className="formmain">
          <h2 className="lead">Contact Us</h2>
          <p className="lead">Niagara Falls, New York</p>
          <p>(980)-345-9972</p>
          <p>j.rosarioc2h@gmail.com</p>
        </div>
        <div className="row">
          <div className="column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93223.65992046423!2d-79.07878139624444!3d43.09948414244751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d363ea29e633b7%3A0x61975ae4b9c5aab3!2sNiagara%20Falls%2C%20NY!5e0!3m2!1sen!2sus!4v1570030951903!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              //   style={{"border:0;"}}
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="column">
            <form className=".needs-validation" action="/action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter First Name"
                required
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Enter Last Name"
                required
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
              />

              <label for="subject">Subject</label>
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="Enter Subject"
                required
              />

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something you liked about this page."
                // style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContactForms;
