import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ContentUpdated from '../components/ContentUpdated';
import Footer from "../components/Footer";

function Movies() {
  const [movies,setMovies]=useState([]);
  const getMovies=()=>{
    fetch(`${process.env.PUBLIC_URL}/assets/sample.json`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        const data = myJson;
        setMovies(data);
      });
  }
  useEffect(()=>{
    getMovies()
  },[])
  const entries1 = movies.entries;
  const filtered = Object.values(entries1).filter(function(entries) { return entries.releaseYear >= 2010 && entries.programType.includes("movie")});
  // const entries = movies.entries;
  return (
    <React.Fragment>
      <Navbar />
      <Header title="Popular Movies" />
      <ContentUpdated content = {filtered}/>
      <Footer/>
    </React.Fragment>
  );
}

export default Movies;
