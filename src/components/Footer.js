import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="list">
        <a href="/" className="tag">
          Home
        </a>

        <a href="/" className="tag">
          Terms and Conditions
        </a>

        <a href="/" className="tag">
          Privacy Policy
        </a>

        <a href="/" className="tag">
          Collection Statement
        </a>

        <a href="/" className="tag">
          Help
        </a>

        <a href="/" className="tag">
          Manage Account
        </a>
      </ul>
      <p className="para">
        Copyright © 201
        <span style={{ fontWeight: "lighter", fontSize: "23px" }}>6</span> DEMO
        Streaming. All Rights Reserved.
      </p>
      <div className="links-1">
        <div className="icon"></div>
        <div className="img">
          <img
            alt=""
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/microsoft.png`}
          />
          <img
            alt=""
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/appStore.png`}
          />
          <img
            alt=""
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/googleP.png`}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
