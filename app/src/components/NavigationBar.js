import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import LoginModal from './LoginModal';

import './NavigationBar.scss';

function NavigationBar() {
  const [modalShow, setModalShow] = useState(false);

  // TODO: the modal-fix solution isn't the best, better off trying to put the modal in it's section
  // FIXME: nav bar instantly disappears instead of collapase when opening modal
  return (
      <Navbar className="modal-fix shadow-sm" collapseOnSelect expand="sm" bg="light" variant="light" sticky="top">
        <div className="container">
          <Navbar.Brand href="#home">lorenzsj.io</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Login
                </Button>
                <LoginModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

  );
}

  export default NavigationBar;