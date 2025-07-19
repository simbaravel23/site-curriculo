// src/components/Section.js
import React from 'react';
import './Section.css'; // Para estilos específicos das Seções

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;