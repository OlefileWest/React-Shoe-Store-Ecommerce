import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

function NavBar({ handleSearch, searchQuery }) {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand className="brand">Shoe Store</Navbar.Brand>

          <div className="textSpace">
            <input
              className="textField"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <Nav>
            <Nav.Link className="navLinks">Products</Nav.Link>
            <Nav.Link className="navLinks"></Nav.Link>
            <Nav.Link className="navLinks"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
