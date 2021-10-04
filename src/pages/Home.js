import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TypeCard from "../components/TypeCard";
import "../css/Content.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const content = [
    {
      type: "Movies",
      image: `${process.env.PUBLIC_URL}/assets/473096.png`,
      url: "/movies",
    },
    {
      type: "Series",
      image: `${process.env.PUBLIC_URL}/assets/525661.png`,
      url: "/series",
    },
    {
      type: "Hollywood Mix",
      image: `${process.env.PUBLIC_URL}/assets/Hollywood.jpg`,
      url: "/hollywood",
    },
    {
      type: "Bollywood Mix",
      image: `${process.env.PUBLIC_URL}/assets/Bollywood.jpg`,
      url: "/bollywood",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <Header title="Popular Shows" />
      <div className="content">
        {content.length > 0 ? (
          content.map((element) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={element.url}
            >
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
      <Footer />
    </React.Fragment>
  );
}

export default Home;
