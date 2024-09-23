import '../footer/footercontainer.sass'

import LogoMobile from '../../assets/img/LogoMobile.png';

import ContactContainer from '../contact/ContactContainer';

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

const FooterContainer = () => {
    return (
      <footer id="footer">
        <ContactContainer />

        <div className="footer-content">
        <img src={LogoMobile} alt="Logo Nicoly Santos" className="footer-logo" />
  
          <nav className="footer-nav">
            <ul>
            <a href="#home" onClick={smoothScroll}>Home</a>
            <a href="#middle" onClick={smoothScroll}>Sobre</a>
            <a href="#tech" onClick={smoothScroll}>Tecnologias</a>
            <a href="#projects" onClick={smoothScroll}>Projetos</a>
            <a href="#contact" onClick={smoothScroll}>Contato</a>
            </ul>
          </nav>
          
          <p className="copyright">© 2024 Nicoly Santos. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };

export default FooterContainer;