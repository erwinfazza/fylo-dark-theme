import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { Navbar, Nav, NavLink, Container, Button } from "react-bootstrap";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <Navbar expand="lg" variant="dark" className="pt-5 logo">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className="logo" src={Logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              data-bs-target="#basic-navbar-nav"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="justify-content-end list-nav">
                <NavLink as={Link} to="/features">
                  Features
                </NavLink>
                <NavLink as={Link} to="/team">
                  Team
                </NavLink>
                <NavLink as={Link} to="/signin">
                  Sign In
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
