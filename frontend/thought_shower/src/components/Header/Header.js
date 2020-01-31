import React from 'react'
import CreateBtn from '../Create/CreateBtn'
import { Link } from 'react-router-dom'
import './Header.css'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Header(props) {
  const logBtn = props.user
    ? <Nav.Link><Link to="/" onClick={props.handleLogout} className="loginNav">Log Out</Link></Nav.Link>
    : <Nav.Link><Link to="/login" className="loginNav">Log In</Link></Nav.Link>

  const name = props.user
    ? props.user.name.split(' ').shift()
    : ''

  const greeting = props.user
    ? <Navbar.Text href="/" className="loginNav">Welcome back, {name}</Navbar.Text>
    : <Nav.Link><Link to="/signup" className="loginNav">Sign Up</Link></Nav.Link>

  return (

        <div className='headerBody'>
      <Navbar bg='primary' variant='dark' >
        <Navbar.Brand href="/" className='navTitle'>
          Thought Shower
        </Navbar.Brand>
        <Navbar.Collapse id="basic-nav-dropdown">
          <Nav className='mr-auto'>
            <Nav.Link><Link to="/" className="loginNav">Home</Link></Nav.Link>
            <CreateBtn user={props.user} createIdea={props.createIdea}/>
            <Nav.Link><Link to="/ideas" className="loginNav">Browse</Link></Nav.Link>
            <Nav.Link><Link to="/aboutus" className="loginNav">About Us</Link></Nav.Link>
          </Nav>
          {greeting}
          {logBtn}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
