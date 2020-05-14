import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import './Dashboard.scss';

function Sidebar() {
  return (
    <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse" bg="light" variant="light">
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Dashboard</span>
        <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <div className="sidebar-sticky pt-3">
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              <span data-feather="home"></span>
              Home (Debug)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              <span data-feather="home"></span>
              Posts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              <span data-feather="home"></span>
              New Post
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Nav>
  );
}

export default Sidebar;