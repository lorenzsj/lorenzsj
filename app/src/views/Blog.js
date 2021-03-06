import React from 'react';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import BlogCard from '../components/BlogCard';

import mockup0 from '../img/mockup0.jpg';
import mockup1 from '../img/mockup1.jpg';
import mockup2 from '../img/mockup2.jpg';

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
    <section>
      <div className="container">
        <h2>Blog</h2>
        <p className="lead text-muted mb-5">Here are the things I am currently talking about</p>
        <div className="row mb-2">
          <div className="col">
            <DropdownButton title="Filter">
              <Dropdown.Item active>New</Dropdown.Item>
              <Dropdown.Item>Hot</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="row">
          {
            cards.map(function(c) {
              return <BlogCard title={c.title} description={c.description} image={c.image} badge={c.badge} />;
            })
          }
        </div>
        <div className="text-center">
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;