import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import "../css/Navbar.css";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  var change = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
        <div className="navBar">
          <button onClick={change}>
            <FaAlignRight />
          </button>
          <ul className={toggle ? "links show-nav" : "links"}>
            <li className="heading">
              Streaming Site
            </li>
            <li >
              Login
            </li>
            <li>
              Start Free Trial
            </li>
          </ul>
          
        </div>
      
    </React.Fragment>
  );
}
export default Navbar;
