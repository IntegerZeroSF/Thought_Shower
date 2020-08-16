import React from 'react'
import CreateBtn from '../Create/CreateBtn'
import './Header.css'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Header(props) {
  const logBtn = props.user
    ? <Nav.Link href="/" onClick={props.handleLogout} className="loginNav">Log Out</Nav.Link>
    : <Nav.Link href="/login" className="loginNav">Log In</Nav.Link>

  const name = props.user
    ? props.user.name.split(' ').shift()
    : ''

  const greeting = props.user
    ? <Navbar.Text href="/" className="loginNav">Welcome back, {name}</Navbar.Text>
    : <Nav.Link href="/signup" className="loginNav">Sign Up</Nav.Link>

  return (

        <div className='headerBody'>
      <Navbar bg='primary' variant='dark' expand="lg">
        <Navbar.Brand href="/" className='navTitle'>
          Thought Shower
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link href="/" className="loginNav">Home</Nav.Link>
            {/* <Nav.Link><Link to="/" className="loginNav">Home</Link></Nav.Link> */}
            <CreateBtn user={props.user} createIdea={props.createIdea}/>
            <Nav.Link href="/ideas" className="loginNav">Browse</Nav.Link>
            <Nav.Link href="/aboutus" className="loginNav">About Us</Nav.Link>
          </Nav>
          {greeting}
          {logBtn}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
