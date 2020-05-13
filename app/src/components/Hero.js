import React from 'react';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './Hero.scss';

import macbook from '../img/macbook.png';

function Hero() {
  return (
    <Jumbotron fluid className="mb-0">
      <div className="container">
      <div className="d-flex row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div>
              <h1 className="d-flex justify-content-center justify-content-md-start">Like What You See?</h1>
              {/* TODO: maybe centering the text looks better? not sure atm */}
              <p class="lead d-flex justify-content-center justify-content-md-start">Proident eu nisi commodo enim deserunt enim duis sunt nostrud anim. Sunt do sit enim veniam nostrud culpa adipisicing do ullamco occaecat et. </p>
              <p className="mb-0 d-flex justify-content-center justify-content-md-start">
                <Button className="mr-2 shadow" variant="primary">Hire Me</Button>
                <Button className="mr-2 shadow" variant="outline-primary">My Resume</Button>
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img src={macbook} alt="..." class="img-fluid"/>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Hero;
