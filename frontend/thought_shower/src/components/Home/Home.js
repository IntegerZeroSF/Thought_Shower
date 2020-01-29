import React from "react";
import "./Home.css";
import TitleView from "../TitleView/TitleView";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

function Home() {
    return (
        <div className="homeBody">
            {/* <div className="intro">
                <h1>Welcome to Thought Shower!</h1>
                <br/>
                <p>This site is a place where where people who have brilliant ideas,
                or are in need of some swift inspiration.</p>
                <br/>
                <p>Below you will find a pair of links where you may start browsing for ideas,
                or even submit your own!</p>
            </div>
            <div className="cardDiv">
                <div className="cardHomeTop">
                    See other Thoughts!
                </div>
                <div className="cardHomeButtons">
                    <Button variant="flat" size="lg" block>Create!</Button>
                </div>
            </div>
            <div className="cardDiv">
                <div className="cardHomeTop">
                    Or Make your own!
                </div>
                 <div className="cardHomeButtons">
                    <Button variant="flat" size="lg" block>Browse!</Button>
                </div>
            </div>
              <div className="cardDiv">
                <div className="cardHomeTop">
                    See other Thoughts!
                </div>
                <div className="cardHomeButtons">
                    <Button variant="flat" size="lg" block>Update</Button>
                    <Button variant="flat" size="lg" block>Delete</Button>
                    <Button variant="flat" size="lg" block>Comment</Button>
                </div>
            </div> */}
            <Jumbotron fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary" block>Create!</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary" block>Browse</Button>
                </Card.Body>
            </Card>
            
        </div>
  
      </div>
    </div>
  );
}

export default Home;
