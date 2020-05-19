import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar (props) {
    return (
        <Navbar sticky={"top"}>
            <Navbar.Brand>
                <strong>DM</strong>
            </Navbar.Brand>
            <Nav className={"mr-auto"} >
                <Nav.Link
                    as={Link}
                    to={"/"}
                    eventKey={"home"}>
                    Home
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to={"/Resume"}
                    eventKey={"resume"}>
                    Resume
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to={"/Projects"}
                    eventKey={"projects"}>
                    Projects
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}