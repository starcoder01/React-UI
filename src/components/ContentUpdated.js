import React from "react";
import TypeCard from "../components/TypeCard";
import "../css/Content.css";

function ContentUpdated(props) {
  return (
    <React.Fragment>
        <div className="content">
          {props.content.length>0?props.content.map((element) => (
            <TypeCard
              key={element.title}
              type={element.releaseYear}
              image={element.images.poster.url}
            />
          )):<p>Loading......</p>}
        </div>
    </React.Fragment>
  );
}

export default ContentUpdated;
