import { useEffect, useState } from 'react';
import '../header/header.sass'; 
import Logo from '../../assets/img/logo.png';
import LogoMobile from '../../assets/img/LogoMobile.png';
import MenuIcon from '../../assets/img/menu-icon.png'; 

const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  let headerOffset;

  switch (targetId) {
    case '#home':
      headerOffset = 70; 
      break;
    case '#middle':
      headerOffset = 60; 
      break;
    case '#tech':
      headerOffset = 80; 
      break;
    case '#projects':
      headerOffset = 30; 
      break;
    case '#contact':
      headerOffset = 80; 
      break;
    default:
      headerOffset = 45; 
  }

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header id="header">
      {isMobile ? (
        <>
          <img src={LogoMobile} alt="Logo Nicoly Mobile" />
          <img 
            src={MenuIcon} 
            alt="Menu" 
            onClick={toggleModal} 
            style={{ cursor: 'pointer', width: '30px', height: '30px' }} 
          />
          {isModalOpen && (
            <div className="modal">
              <nav>
                <a href="#home" onClick={smoothScroll}>HOME</a>
                <a href="#middle" onClick={smoothScroll}>SOBRE</a>
                <a href="#tech" onClick={smoothScroll}>TECNOLOGIAS</a>
                <a href="#projects" onClick={smoothScroll}>PROJETOS</a>
                <a href="#contact" onClick={smoothScroll}>CONTATO</a>
              </nav>
              <button onClick={toggleModal}>Fechar</button>
            </div>
          )}
        </>
      ) : (
        <>
          <img src={Logo} alt="Logo Nicoly" />
          <nav>
            <a href="#home" onClick={smoothScroll}>HOME</a>
            <a href="#middle" onClick={smoothScroll}>SOBRE</a>
            <a href="#tech" onClick={smoothScroll}>TECNOLOGIAS</a>
            <a href="#projects" onClick={smoothScroll}>PROJETOS</a>
            <a href="#contact" onClick={smoothScroll}>CONTATO</a>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
