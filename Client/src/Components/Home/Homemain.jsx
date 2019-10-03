import React from "react";

function Homemain() {
  return (
    <React.Fragment>
      <div className="jumbotron bg-warning">
        <h1 className="display-4">What you've been waiting for.</h1>
        <p className="lead">
          Your cell phone is a constant companion, a pocket-sized link to the
          news, games, social media and more. That's why it's so important to
          find the phone and plan option that's right for you and your family.
        </p>
        <hr className="my-4" />
        <p>
          Feature-packed phones with operating systems that enable you to
          download apps, stream movies and music, access the Internet and take
          great photos.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/Products" role="button">
            Learn more
          </a>
        </p>
      </div>

      <div></div>
    </React.Fragment>
  );
}
export default Homemain;
