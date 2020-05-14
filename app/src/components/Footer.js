import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';

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
    icon: faStackOverflow,
    url: "#"
  },
  {
    icon: faTwitter,
    url: "#"
  },
  {
    icon: faRssSquare,
    url: "#"
  },
]

function Footer() {
  return (
    <footer className="py-4 bg-light"> {/* TODO: Change back to bg-dark later}
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
        <div class="text-dark bg-light">
          <div class="row d-flex justify-content-center">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#" class="text-dark">Site Map</a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-dark">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-dark">Terms of Service</a>
              </li>
            </ul>
          </div>
          <p class="text-center mb-md-0">&copy; 2020 Stephen Lorenz. All rights reserved.</p>
        </div>
      </div>
   </footer>
  );
}

export default Footer;