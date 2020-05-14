import React from 'react';

import Hero from './Hero';
import Services from './Services';
import Blog from './Blog';

function Overview() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Blog/>
    </div>
  );
}

export default Overview;