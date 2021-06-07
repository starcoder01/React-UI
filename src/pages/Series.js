import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ContentUpdated from '../components/ContentUpdated';
import Footer from "../components/Footer";

function Series() {
  const [series,setSeries]=useState([]);
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
        setSeries(data);
      });
  }
  useEffect(()=>{
    getMovies()
  },[])
  const entries1 = series.entries;
  const filtered = Object.values(entries1).filter(function(entries) { return entries.releaseYear >= '2010' && entries.programType.includes("series")});
  return (
    <React.Fragment>
      <Navbar />
      <Header title="Popular Web Shows" />
      <ContentUpdated content = {filtered}/>
      <Footer/>
    </React.Fragment>
  );
}

export default Series;
