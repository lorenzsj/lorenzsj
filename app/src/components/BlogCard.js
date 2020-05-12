import React from 'react';

function Blog(props) {
  return (
    <div className="col-md-4 mb-4">
      {/* Card Image */}
      <div className="card shadow-sm border-0 h-100">
        <a href="#">
          <img className="card-img-top" src={props.image} alt=""/>
        </a>
        <div className="card-body p-3">
          <div className="row mb-2">
            {/* Card Title */}
            <div className="col-sm-auto">
              <h5><a className="text-dark" href="#">{props.title}</a></h5>
            </div>
            {/* Card Badge */}
            <div className="col-sm-auto ml-auto">
              <h5><span className="badge badge-primary">{props.badge}</span></h5>
            </div>
          </div>
          {/* Card Description */}
          <p className="text-muted card-text">{props.description}</p>
          <p className="card-text mt-auto"><a href="#">Read more</a></p>
        </div>
      </div>
    </div>
  );
}

export default Blog;