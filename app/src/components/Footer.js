import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const socialMedia = [
  {
    icon: faGithub,
    url: "#"
  },
  {
    icon: faLinkedin,
    url: "#"
  },
  {
    icon: faGraduationCap,
    url: "#"
  },
  {
    icon: faTwitter,
    url: "#"
  },
  {
    icon: faStackOverflow,
    url: "#"
  },
]

function Footer() {
  return (
    <footer className="py-4 bg-dark"> {/* TODO: Change back to bg-dark later}
      {/* Social Media Section */}
      <div className="container">
        <div className="row d-flex justify-content-center mb-3">
          <ul className="list-inline">
            {
              socialMedia.map(function(sm) {
                return (
                  <li class="list-inline-item mr-4-not-last">
                    <a href={sm.url}>
                      <FontAwesomeIcon icon={sm.icon} size="3x"/>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        {/* Copyright Section */}
        <div className="text-muted">
          <div className="row d-flex justify-content-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Site Map</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <p className="text-center mb-md-0">&copy; 2020 Stephen Lorenz. All rights reserved.</p>
        </div>
      </div>
   </footer>
  );
}

export default Footer;