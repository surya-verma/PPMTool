import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
