import React from "react";
import "./Home.css";
import TitleView from "../TitleView/TitleView";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeBody">
      <div className="intro">
        <h1>Welcome to Thought Shower!</h1>
        <br />
        <p>
          This site is a place where where people who have brilliant ideas, or
          are in need of some swift inspiration.
        </p>
        <br />
        <p>
          Below you will find a pair of links where you may start browsing for
          ideas, or even submit your own!
        </p>
      </div>
      <div className="cardDiv">
        <div className="cardHomeTop">See other Thoughts!</div>
        <div className="cardHomeButtons">
          <div className="thoughts"> 

           <Link to={"/thoughts/"}>
              <button className="homeButtons">Browse</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cardDiv">
        <div className="cardHomeTop">Or Make your own!</div>
        <div className="cardHomeButtons">
          <button className="homeButtons">Make</button>
        </div>
      </div>
      <div className="cardDiv">
        <div className="cardHomeTop">See other Thoughts!</div>
        <div className="cardHomeButtons">
          <button className="homeButtons">Update</button>
          <button className="homeButtons">Delete</button>
          <button className="homeButtons">Comment</button>
        </div>
  
      </div>
    </div>
  );
}

export default Home;
