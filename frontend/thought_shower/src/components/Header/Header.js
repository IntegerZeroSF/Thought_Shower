import React from 'react';
import CreateBtn from '../Create/CreateBtn';
import { Link } from 'react-router-dom';
import './Header.css';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Header(props) {
  return (
    <div className='headerBody'>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href="/" className='navTitle'>
          Thought Shower
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href="/">Home</Nav.Link>
          <CreateBtn createIdea={props.createIdea}/>
          <Nav.Link href="/ideas">Browse</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-light'>Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
