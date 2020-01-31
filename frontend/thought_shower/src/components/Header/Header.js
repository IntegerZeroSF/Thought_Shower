import React from 'react'
import CreateBtn from '../Create/CreateBtn'
import { Link } from 'react-router-dom'
import './Header.css'

import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'


function Header(props) {
  const logBtn = props.user
    ? <Link to="/"><Button onClick={props.handleLogout}>Log Out</Button></Link>
    : <Link to="/login"><Button>Log In</Button>></Link>

  const name = props.user
    ? props.user.name.split(' ').shift()
    : ''

  const greeting = props.user
    ? <Navbar.Text href="/">Welcome back, {name}</Navbar.Text>
    : <Link to="/signup"><Button>Sign Up</Button>></Link>

  return (
    <div className='headerBody'>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href="/" className='navTitle'>
          Thought Shower
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href="/">Home</Nav.Link>
          <CreateBtn user={props.user} createIdea={props.createIdea}/>
          <Nav.Link href="/ideas">Browse</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav>
        {greeting}
        {logBtn}
      </Navbar>
    </div>
  )
}

export default Header
