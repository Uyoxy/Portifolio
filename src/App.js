import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import 'aos/dist/aos.css';

const App = () => {
  const links = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
