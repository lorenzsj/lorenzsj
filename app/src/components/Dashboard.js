import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import NavItem from "react-bootstrap/NavItem";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import MyEditor from './MyEditor';

import './MyEditor.scss';

function Dashboard() {
  return (
    <div className="container">
      <MyEditor />
    </div>
  );
}

export default Dashboard;