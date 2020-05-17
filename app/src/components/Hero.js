import React from 'react';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton'
import Jumbotron from 'react-bootstrap/Jumbotron';

import '../scss/Hero.scss';

import macbook from '../img/macbook.png';

/* TODO: Implement Hero text and image combo as a separate carousel component */
function Hero() {
  return (
    <Jumbotron fluid className="mb-0 hero-bg">
      <div className="container">
        <div className="d-flex row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-text-bg shadow">
              <h1 className="d-flex justify-content-center justify-content-lg-start">Like What You See?</h1>
              {/* TODO: maybe centering the text looks better? not sure atm */}
              <p class="lead d-flex justify-content-center justify-content-lg-start">Proident eu nisi commodo enim deserunt enim duis sunt nostrud anim. Sunt do sit enim veniam nostrud culpa adipisicing do ullamco occaecat et. </p>
              <p className="mb-0 d-flex justify-content-center justify-content-lg-start">
                <Button className="mr-2 shadow" variant="primary">Hire Me</Button>
                {/* TODO: style this a bit better */}
                <SplitButton className="shadow-sm" title="My Resume" variant="outline-primary">
                  <Dropdown.Header>Save as</Dropdown.Header> {/* the header is .. smaller than the options haha */}
                  <Dropdown.Item eventKey="1">PDF</Dropdown.Item> {/* TODO: make hover same color as primary */}
                  <Dropdown.Item eventKey="2">DocX</Dropdown.Item>
                  <Dropdown.Item eventKey="3">LaTeX</Dropdown.Item>
                </SplitButton>
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <img src={macbook} alt="..." className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Hero;
