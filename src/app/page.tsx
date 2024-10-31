import React from 'react';
import Header from './header'; // Adjust according to the correct path
import Hero from './Hero/page';
import About from './about/page';
import Contact from './Contact/page';

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default page;
