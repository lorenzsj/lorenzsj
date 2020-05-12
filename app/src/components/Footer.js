import React from 'react';

const socialMedia = [
  {
    imageName: "fab fa-github",
    url: "#"
  },
  {
    imageName: "fab fa-linkedin",
    url: "#"
  },
  {
    imageName: "fab fa-stack-overflow",
    url: "#"
  },
  {
    imageName: "fab fa-twitter",
    url: "#"
  },
  {
    imageName: "fas fa-rss-square",
    url: "#"
  },
]

function Footer() {
  return (
    <div className="py-4 bg-dark">
      {/* Social Media Section */}
      <div className="container">
        <div className="row d-flex justify-content-center mb-3">
          <ul className="list-inline">
            <li className="list-inline-item mr-4">
              {
                socialMedia.map(function(l) {
                  return <a href="{l.url}" className="text-dark"><i className="{l.imageName} fa-3x"></i></a>;
                })
              }
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright Section */}
      <div class="bg-dark text-dark">
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
  );
}

export default Footer;