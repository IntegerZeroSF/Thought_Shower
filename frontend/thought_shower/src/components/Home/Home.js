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
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <CreateBtn createIdea={props.createIdea} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
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
