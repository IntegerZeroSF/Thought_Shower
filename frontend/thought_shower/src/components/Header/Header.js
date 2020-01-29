import React from 'react';
// import './Header.css'

import Nav from 'react-bootstrap/Nav';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function Header() {
    return (
        <div className="headerBody">
            {/* <nav className="nav">
                <div className="navTitle">Thought Shower</div>
                <ul className="navList">
                    <li className="navItem">Home</li>
                    <li className="navItem">Create</li>
                    <li className="dropdown">Search
                        <div className="dropdownContent">
                            <div className="dropdownLink">Sample 1</div>
                            <div className="dropdownLink">Sample 2</div>
                            <div className="dropdownLink">Sample 3</div>
                        </div>
                    </li>
                    <li className="navItem">About Us</li>
                    <li className="navItem">Login</li>
                </ul>
            </nav> */}
            {/* <Nav className="justify-content-start" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Thought Shower</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav variant="tabs" className="justify-content-end" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Create</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Browse</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-3">Search</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-4">Login</Nav.Link>
                </Nav.Item>
            </Nav> */}
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Thought Shower</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Create">Create</Nav.Link>
                <Nav.Link href="#Browse">Browse</Nav.Link>
                <Nav.Link href="#AboutUs">About Us</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Header;