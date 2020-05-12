import React from 'react';

import BlogCard from "./BlogCard";

import mockup0 from '../img/mockup0.jpg';
import mockup1 from '../img/mockup1.jpg';
import mockup2 from '../img/mockup2.jpg';

// TODO: call api to retrieve this information
const cards = [
  {
    // TODO: Consider adding author and date
    title: "Ex cupidatat eu",
    description: "Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et.",
    image: mockup0,
    badge: "New" // TODO: Consider using a global table for consistency, this works for now
  },
  {
    title: "Tempor aute occaecat",
    description: "Tempor aute occaecat pariatur esse aute amet.",
    image: mockup1,
    badge: "Hot"
  },
  {
    title: "Voluptate ex irure",
    description: "Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.",
    image: mockup2,
    badge: null, // FIXME: seemingly work w/o an if checking for null in the BlogCard but, probably not the finest idea
  }
];

function Blog() {
  return (
    <section className="bg-light">
      <div className="container">
        <h2>Blog</h2>
        <p className="lead text-muted mb-5">Here are the things I am currently talking about</p>
        <div className="row">
          {
            cards.map(function(c) {
              return <BlogCard title={c.title} description={c.description} image={c.image} badge={c.badge} />;
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Blog;