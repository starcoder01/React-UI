import React from "react";
import "../css/Header.css";

function Header({ title }) {
  return (
    <React.Fragment >
      <div className="header">
        <ul className="header-ul">
          <li>{title}</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
