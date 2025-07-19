// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Para estilos específicos do Footer

const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {anoAtual} Seu Nome. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;