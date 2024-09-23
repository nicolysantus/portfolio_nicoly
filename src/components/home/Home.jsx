import Avatar from '../../assets/img/nicoly.png';
import "../home/home.sass";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/nicolysantus" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/nicolysantus" },
  { name: "whatsapp", icon: <FaWhatsapp />, url: "https://wa.me/11984015865" },
];

const Home = () => {
  return (
    <aside id="home">
      <div>
        <div className="avatar-container">
          <img src={Avatar} alt="Nicoly Santos" />
        </div>
        <h1>NICOLY SANTOS</h1>
        <p className='title'>Estudante & Desenvolvedora</p>
        <p className='pg'>Welcome to my portfolio.</p>
      </div>
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.url} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
            {network.icon}
          </a>
        ))}
      </section>
    </aside>
  );
};

export default Home;