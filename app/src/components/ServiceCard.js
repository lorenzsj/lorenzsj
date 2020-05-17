import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../scss/ServiceCard.scss';

function ServiceCard(props) {
  return (
    <div className="col-sm-6 col-lg-4 mb-3">
      {/* Service Header */}
      <div className="row mb-2">
        {/* Service Icon */}
        <div className="col-auto pr-0">
          <FontAwesomeIcon icon={props.icon} size="2x"/>
        </div>
        {/* Service Name */}
        <div className="d-flex col-auto align-items-center">
          <h6 className="mb-0">{props.title}</h6>
        </div>
      </div>
      {/* Service Description */}
      <p className="text-muted">{props.description}</p>
    </div>
  );
}

export default ServiceCard;
