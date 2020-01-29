import React from "react";
import CreateBtn from "../Create/CreateBtn";
import { Link } from "react-router-dom";
// import './Header.css'

import Nav from "react-bootstrap/Nav";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Header(props) {
  return (
    <div className="headerBody">
      <Navbar bg="primary" variant="light" >
        <Navbar.Brand href="#home">
          <Link to="/" className="navTitle">
            Thought Shower
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link>
            {" "}
            <CreateBtn createIdea={props.createIdea} />
          </Nav.Link>
          <Nav.Link href="#Browse">Browse</Nav.Link>
          <Nav.Link href="#AboutUs">About Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
