import React from "react";
import "./Home.css";
import CreateBtn from "../Create/CreateBtn";
import TitleView from "../TitleView/TitleView";
import { Link } from "react-router-dom";


import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Home(props) {
  return (
    <div className="homeBody">
      <Jumbotron fluid className="intro">
        {/* <Container className="intro"> */}
          <h1 className="jumboTitle">Fluid jumbotron</h1>
          <p className="jumboPara">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        {/* </Container> */}
      </Jumbotron>
      <Card className="cardDiv">
        <Card.Header className="homeCardTitle">Create your own Idea</Card.Header>
        <Card.Body>
          <Card.Text className="homeCardBody">
            Click the button below to get started on submitting your own ideas.
          </Card.Text>
          <Button block createIdea={props.createIdea}>
            Create
          </Button>
        </Card.Body>
      </Card>
      <br/>
      <br/>
      <Card className="cardDiv">
        <Card.Header className="homeCardTitle">Browse your own Idea</Card.Header>
        <Card.Body>
          <Card.Text className="homeCardBody">
            Here you can browser for all kinds of ideas or inspiration. 
          </Card.Text>
          <Link to={"/thoughts/"}>
            <Button variant="primary" block>
              Browse
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
