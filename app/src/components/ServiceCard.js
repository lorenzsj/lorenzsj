import React from 'react';

function ServiceCard(props) {
  return (
    <div className="col-sm-6 col-lg-4 mb-3">
      {/* Service Header */}
      <div className="row services-header">
        {/* Service Icon */}
        <div className="col-sm-auto pr-0"> {/* FIXME: Issue with responsiveness */}
          {/*<svg className="lnr text-primary services-icon">
            <use xlink:href="#lnr-screen"></use>
          </svg>*/}
        </div>
        {/* Service Name */}
        <div className="d-flex col-sm-auto align-items-center">
          <h6 className="mb-0">{props.title}</h6>
        </div>
      </div>
      {/* Service Description */}
      <p className="text-muted">{props.description}</p>
    </div>
  );
}

export default ServiceCard;
