import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import NavItem from "react-bootstrap/NavItem";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Sidebar from './Sidebar';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;