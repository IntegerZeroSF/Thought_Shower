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
<<<<<<< HEAD
      <Navbar bg="primary" variant="light" >
        <Navbar.Brand href="/">
          <Link to="/" className="navTitle">
            Thought Shower
          </Link>
=======
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/" className="navTitle">
          Thought Shower
>>>>>>> 5bab91906ed23f871e6c58e00eff73694bc9f36a
        </Navbar.Brand>
        <Nav className="mr-auto">
<<<<<<< HEAD
          <Nav.Link href="#home">Home</Nav.Link>
          <CreateBtn createIdea={props.createIdea}/>
<<<<<<< HEAD
=======
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link>
            {" "} */}
            <CreateBtn createIdea={props.createIdea} />
          {/* </Nav.Link> */}
>>>>>>> bootstrap_day2
          <Nav.Link href="#Browse">Browse</Nav.Link>
=======
          <Nav.Link href="ideas">Browse</Nav.Link>
>>>>>>> 5bab91906ed23f871e6c58e00eff73694bc9f36a
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
