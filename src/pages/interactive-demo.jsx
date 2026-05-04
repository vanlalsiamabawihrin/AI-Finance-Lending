import React from 'react';
import InteractiveShowcase from '../components/InteractiveShowcase';
import ScrollProgress from '../components/ScrollProgress';
import SEO from '../components/SEO';
import '../styles/interactive.css';

const InteractiveDemo = () => {
  return (
    <>
      <SEO 
        title="Interactive Showcase - Premium Web Experience"
        description="Experience modern web design with smooth animations, parallax effects, and engaging interactions."
        pathname="/interactive-demo"
      />
      <ScrollProgress />
      <InteractiveShowcase />
    </>
  );
};

export default InteractiveDemo;
