import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ServiceCard.scss';

function ServiceCard(props) {
  return (
    <div className="col-sm-6 col-lg-4 mb-3">
      {/* Service Header */}
      <div className="row mb-2">
        {/* Service Icon */}
        <div className="col-sm-auto pr-0"> {/* FIXME: Issue with responsiveness */}
          <FontAwesomeIcon icon={props.icon} size="2x"/>
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
