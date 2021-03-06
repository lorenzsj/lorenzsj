import React from 'react';

import '../scss/BlogCard.scss';

function Blog(props) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      {/* FIXME: Slightly improved responsiveness for tablet, badge still has issues */}
      {/* TODO: try tweaking column sizes to accomodate the badge, potentially put badge in top right corner */}
      {/* Card Image */}
      <div className="card shadow-sm border-0 h-100">
        <a href="#">
          <img className="card-img-top" src={props.image} alt=""/>
          <h5><span className="badge badge-primary badge-float-tr m-2">{props.badge}</span></h5>
        </a>
        <div className="card-body d-flex flex-column p-3">
          <div className="row mb-2">
            {/* Card Title */}
            <div className="col-auto">
              <h5><a className="text-dark" href="#">{props.title}</a></h5>
            </div>
            {/* Card Badge */} 
            <div className="col-auto ml-auto">
              
            </div>
          </div>
          {/* Card Description */}
          <p className="text-muted card-text">{props.description}</p>
          <p className="card-text mt-auto align-bottom"><a href="#">Read more</a></p>
        </div>
      </div>
    </div>
  );
}

export default Blog;