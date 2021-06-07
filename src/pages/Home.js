import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TypeCard from "../components/TypeCard";
import "../css/Content.css";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const content = [
    {
      type: "Movies",
      image: "525661.png",
      url: "/movies",
    },
    {
      type: "Series",
      image: "473096.png",
      url: "/series",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <Header title="Popular Shows" />
      <div className="content">
        {content.length > 0 ? (
          content.map((element) => (
            <Link style={{textDecoration:"none",color:"black"}} to={element.url}>
              <TypeCard
                key={element.type}
                type={element.type}
                image={element.image}
              />
            </Link>
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
