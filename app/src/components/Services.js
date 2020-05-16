import React from 'react';

import ServiceCard from './ServiceCard';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

const cards = [
  {
    icon: faLaptopCode,
    title: "Software Engineer",
    description: "Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et."
  },
  {
    icon: faCloud,
    title: "DevOps",
    description: "Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.",
  },
  {
    icon: faFlask,
    title: "Research Assistant",
    description: "Tempor aute occaecat pariatur esse aute amet."
  },

];

function Services() {
  return (
    <section>
      <div className="container">
        <h2>What I Can Do For You</h2>
        <p className="lead text-muted mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className="row">
          {
            cards.map(function(c) {
              return <ServiceCard icon={c.icon} title={c.title} description={c.description} />;
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Services;
