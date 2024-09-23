import React, { useState } from 'react';
import '../projects-list/projectslist.sass';
import { FaGithub, FaGlobe, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import ListaImg from '../../assets/img/listadetarefas.png';
import BeautyImg from '../../assets/img/sitebeauty.png';
import PortfolioImg from '../../assets/img/siteportfolio.png';
import YourVersionImg from '../../assets/img/site-your-version.png';

const projectList = [
  {
    title: 'Lista de Tarefas',
    image: ListaImg,
    technologies: ['dotnet', 'react', 'axios', 'vite', 'sql'],
    github: 'https://github.com/nicolysantus/lista-tarefas',
    website: '#',
  },
  {
    title: 'Site Your Version',
    image: YourVersionImg,
    technologies: ['html', 'css', 'js', 'bootstrap', 'jquery'],
    github: 'https://github.com/nicolysantus/site-your-version',
    website: 'https://site-your-version.vercel.app/',
  },
  {
    title: 'Portifólio Nicoly',
    image: PortfolioImg,
    technologies: ['react', 'vite', 'sass'],
    github: 'https://github.com/seu-repositorio/loja-maquiagem',
    website: 'https://portfolionicoly.vercel.app/',
  },
  {
    title: 'Site Beauty',
    image: BeautyImg,
    technologies: ['html', 'css', 'js'],
    github: 'https://github.com/nicolysantus/site-beauty/blob/main/README.md',
  },
];

const ProjectsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= projectList.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 2 : prevIndex - 2
    );
  };

  return (
    <section id="projectslist">
      <div className="project-carousel">
        <FaArrowLeft className="arrow left-arrow" onClick={handlePrev} />
        <div className="projects-wrapper">
          <div className="project-card">
            <img src={projectList[currentIndex].image} alt={projectList[currentIndex].title} />
            <h3>{projectList[currentIndex].title}</h3>
            <div className="technologies">
              {projectList[currentIndex].technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={projectList[currentIndex].github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={projectList[currentIndex].website} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </div>
          </div>

          {projectList[currentIndex + 1] && (
            <div className="project-card">
              <img src={projectList[currentIndex + 1].image} alt={projectList[currentIndex + 1].title} />
              <h3>{projectList[currentIndex + 1].title}</h3>
              <div className="technologies">
                {projectList[currentIndex + 1].technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={projectList[currentIndex + 1].github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={projectList[currentIndex + 1].website} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              </div>
            </div>
          )}
        </div>
        <FaArrowRight className="arrow right-arrow" onClick={handleNext} />
      </div>
    </section>
  );
};

export default ProjectsList;
