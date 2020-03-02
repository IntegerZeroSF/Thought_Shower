import React from "react"
import "./Home.css"
import HomeCreateBtn from "../Create/HomeCreateBtn"
import { Link } from "react-router-dom"


import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'

function Home(props) {
  return (
    <div className='homeBody'>
      <Jumbotron fluid className='intro'>
          <h1 className='jumboTitle'>Thought Shower</h1>
          <p className='jumboPara'>
            Welcome to Thought Shower, where developers may help others find inspiration or find
            inspiration themselves!
            <br/>
            Down below you can get started by simpley creating your own idea, or browsing others.
          </p>
      </Jumbotron>
      <Card className='cardDiv'>
        <Card.Header className='homeCardTitle'>Create your own Idea</Card.Header>
        <Card.Body>
          <Card.Text className='homeCardBody'>
            Click the button below to get started on submitting your own ideas.
          </Card.Text>
          <Button variant="primary" block>
            <HomeCreateBtn user={props.user} createIdea={props.createIdea} />
          </Button>
        </Card.Body>
      </Card>
      <br/>
      <br/>
      <Card className='cardDiv'>
        <Card.Header className='homeCardTitle'>Browse your own Idea</Card.Header>
        <Card.Body>
          <Card.Text className='homeCardBody'>
            Here you can browser for all kinds of ideas or inspiration. 
          </Card.Text>
          <Link to="/ideas">
            <Button variant='primary' block>
              Browse
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home
