import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import AboutUs from './components/AboutUs';
import Category from './components/Category';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Poster />
      <AboutUs />
      <Category />
      <Menu />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
