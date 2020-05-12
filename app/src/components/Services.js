import React from 'react';

import ServiceCard from './ServiceCard';

const cards = [
  {
    title: "Software Engineer",
    description: "Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et."
  },
  {
    title: "Research Assistant",
    description: "Tempor aute occaecat pariatur esse aute amet."
  },
  {
    title: "Expert Debugger",
    description: "Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.",
  }
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
              return <ServiceCard title={c.title} description={c.description} />;
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Services;
