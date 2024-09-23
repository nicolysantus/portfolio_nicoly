import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import { FaWhatsapp } from 'react-icons/fa';

import AvatarContato from '../../assets/img/avatar-contato.png';

import '../contact/contactcontainer.sass';


const socialNetworks = [
    { name: " WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/5511984015865" },
  ];


const ContactContainer = () => {
  return <section id="contact">
    <h2>Contato</h2>
    <div className="contact-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(11) 98401-5865</p>
        </div>
    </div>
    <div className="contact-card">
        <AiOutlineMail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>nicolysantus@gmail</p>
        </div>
    </div>
    <div className="contact-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>São Paulo - SP</p>
        </div>
    </div>
    <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.url} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
            {network.icon}
            {network.name}
          </a>
        ))}
      </section>
    <img src={AvatarContato} alt="Contato" />
  </section>;
};

export default ContactContainer;