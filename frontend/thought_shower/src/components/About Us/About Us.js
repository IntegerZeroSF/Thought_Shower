import React from "react"
import './About Us.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function AboutUs(props) {
    return (
        <>
            <Jumbotron className='aboutUsJumbo'>
                <h1 className='aboutUsTitle'>About Us!</h1>
                <p>
                   The three of us, Kyle Freyermuth, Mike Grothusen, and Raymond Levengood created 
                   the site you are currently using. We came up with this idea while ironocialy trying 
                   come up with our own idea. The site premise is simple. You can browse and create 
                   ideas which you or anyone else may use. It's a match box for you brain.
                </p>
                <br />
                <p>
                    The technoogies we used are varied and fully demonstrate our knowledge of frontend and 
                    backend. Technologies include React, React-Bootstrap, React-Helmet, Mongoose, Express,
                    HTML5, CSS3, and anything else we may have come up with!
                </p>
                <br />
                <p>
                    You can visit the sites for any of these libraries below:
                </p>
                <br />
                <div className='aboutUsBtnDiv'>
                    <Button className='aboutUsBtn' variant='primary' href="https://reactjs.org/">React</Button>
                    <Button className='aboutUsBtn' variant='primary' href="https://react-bootstrap.github.io/">React-Bootstrap</Button>
                    <Button className='aboutUsBtn' variant='primary' href="https://github.com/nfl/react-helmet">React-Helmet</Button>
                    <Button className='aboutUsBtn' variant='primary' href="https://mongoosejs.com/docs/">Mongoose</Button>
                    <Button className='aboutUsBtn' variant='primary' href="https://expressjs.com/">Express</Button>
                </div>

            </Jumbotron>
        </>
    )
}

export default AboutUs