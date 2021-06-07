import React from "react";
import TypeCard from "../components/TypeCard";
import "../css/Content.css";

function Content(props) {
  return (
    <React.Fragment>
        <div className="content">
          {props.content.length > 0 ? (
            props.content.map((element) => (
              <TypeCard
                key={element.type}
                type={element.type}
                image={element.image}
              />
            ))
          ) : (
            <p>Loading.....</p>
          )}
        </div>
    </React.Fragment>
  );
}

export default Content;
