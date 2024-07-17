import React from 'react';
import '../styles/Hero.scss';
import heroImage from '../assets/img/bank-tree.jpeg';

const Hero = () => (
  <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
    <section className="hero-content">

      <p className="subtitle">No fees.</p>
      <p className="subtitle">No minimum deposit.</p>
      <p className="subtitle">High interest rates.</p>
      <p className="text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
);

export default Hero;
