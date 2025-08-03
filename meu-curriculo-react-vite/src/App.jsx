import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const foto = '/self.jpg'; // Caminho da sua foto de perfil

  const nome = "Ravel Lucas de Freitas Silva";
  const cargo = "Desenvolvedor frontend/backend Júnior";
  const contato = {
    email: "ravel.simba@gmail.com",
    telefone: "+55 (15) 99698-7980",
    linkedin: "https://www.linkedin.com/in/ravel-silva-9b7a9695/", // Seu perfil geral do LinkedIn
    github: "https://github.com/seu-usuario"
  };

  const sobreMim = `Sou um profissional apaixonado por desenvolvimento de sites no front-end, com experiência em [tecnologias/habilidades]. Busco sempre desafios que me permitam aprender e crescer. Iniciei minha carreira como Professor de Educação Física, porem em 2020 após uma cirurgia na coluna resolvi mudar de profissão devido a limitação física.`;

  const experiencia = [
    {
      titulo: "Desenvolvedor Frontend Júnior",
      empresa: "Empresa Aleli",
      periodo: "Mar 2024 - Dez 2024",
      descricao: "Criação de componentes reutilizáveis, integração com APIs RESTful e otimização de performance."
    }
  ];

  const educacao = [
    // Seus dados de educação superior (ex: faculdade)
    {
    grau: "Cursos",
    instituicao: "Alura",
    periodo: "Fev 2024 - Jul 2025"
   }
  ];

  const habilidades = [
    // Suas habilidades
     "JavaScript", "React", "HTML", "CSS", "Node.js", "Git", "Next.js", "RESTful APIs", "Mysql"
  ];

  // NOVA CONSTANTE PARA CURSOS/CERTIFICAÇÕES
  const certificacoesLink = "https://www.linkedin.com/in/ravel-silva-9b7a9695/details/certifications/";
  const certificacoesTexto = "Ver todas as minhas certificações no LinkedIn"; // Texto para o link

  const portfolio = [
    {
      titulo: "Projeto loja de roupas em fremer",
      descricao: "Desenvolvimento de um site com fremer de uma loja de roupas completa",
      link: "hhttps://lojadaregiane.framer.website/" // Link para o repositório ou demo online
    },
    {
      titulo: "Projeto lista de filme React",
      descricao: "Desenvolvimento de um site com api simple para lista de filmes backend em lista simples e banco de dados em memoria",
      link: "https://listadefilmes-adtf.onrender.com" // Link para o repositório ou demo online
    },
    {
      titulo: "Site em React desafio 15",
      descricao: "Criação de uma API robusta para gerenciamento de usuários e posts, utilizando Node.js, Express e Mysql DB. ",
      link: "https://github.com/simbaravel23/projeto15" // Link para o repositório
    },
    // Adicione mais projetos aqui
  ];

  return (
    <div className="App">
      <Header nome={nome} cargo={cargo} contato={contato} foto={foto} />

      <main className="container">
        <Section title="Sobre Mim">
          <p>{sobreMim}</p>
        </Section>

        <Section title="Experiência Profissional">
          {experiencia.length > 0 ? (
            experiencia.map((exp, index) => (
              <div key={index} className="item">
                <h3>{exp.titulo}</h3>
                <p><strong>{exp.empresa}</strong> | {exp.periodo}</p>
                <p>{exp.descricao}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma experiência profissional adicionada ainda.</p>
          )}
        </Section>

        {/* NOVA SEÇÃO DE PORTFÓLIO */}
        <Section title="Portfólio">
          {portfolio.length > 0 ? (
            portfolio.map((projeto, index) => (
              <div key={index} className="item">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                {projeto.link && (
                  <p>
                    <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                      Ver Projeto
                    </a>
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>Nenhum projeto de portfólio adicionado ainda. Comece a construir seu portfólio!</p>
          )}
        </Section>

        <Section title="Educação">
          {educacao.length > 0 ? (
            educacao.map((edu, index) => (
              <div key={index} className="item">
                <h3>{edu.grau}</h3>
                <p><strong>{edu.instituicao}</strong> | {edu.periodo}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma educação adicionada ainda.</p>
          )}
        </Section>

        <Section title="Cursos e Certificações">
          <p>
            Você pode ver a lista completa das minhas certificações e cursos concluídos diretamente no meu perfil do LinkedIn: <br/>
            <a href={certificacoesLink} target="_blank" rel="noopener noreferrer">{certificacoesTexto}</a>
          </p>
        </Section>

        <Section title="Habilidades">
          {habilidades.length > 0 ? (
            <ul className="skills-list">
              {habilidades.map((habilidade, index) => (
                <li key={index}>{habilidade}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma habilidade adicionada ainda.</p>
          )}
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
