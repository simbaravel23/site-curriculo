import React from 'react';
import './Header.css';

const Header = ({ nome, cargo, contato, foto }) => {
  return (
    <header className="header">
      {foto && (
        <div className="profile-photo-container">
          <img src={foto} alt="Foto de Perfil" className="profile-photo" />
        </div>
      )}
      <div className="header-content">
        <h1>{nome}</h1>
        <h2>{cargo}</h2>
        <div className="contact-info">
          <p>Email: <a href={`mailto:${contato.email}`}>{contato.email}</a></p>
          <p>Telefone: {contato.telefone}</p>
          {/* MODIFICAÇÃO AQUI: Removendo "LinkedIn: " e "GitHub: " */}
          {contato.linkedin && <p><a href={contato.linkedin} target="_blank" rel="noopener noreferrer">Seu Perfil no LinkedIn</a></p>}
          {contato.github && <p><a href={contato.github} target="_blank" rel="noopener noreferrer">Seu Perfil no GitHub</a></p>}
        </div>
      </div>
    </header>
  );
};

export default Header;