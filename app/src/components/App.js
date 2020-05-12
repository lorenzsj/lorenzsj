import React from 'react';

import NavigationBar from './NavigationBar';
import Hero from './Hero';
import Services from './Services';
import Blog from './Blog';
import Footer from './Footer';

import './App.scss';

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Services />
      <Blog />
      <Footer />
      <script src="https://kit.fontawesome.com/0d3f9979ff.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
