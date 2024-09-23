import '../certificates/certificatescontainer.sass';

import AvatarTech from '../../assets/img/avatar-tech.png';


const CertificatesContainer = () => {
  return <section id="certificates">
    <h2>Certificações</h2>
    <div className="certificates-card">
      <div>
        <p>Amazon AWS Academy Cloud Fondation</p>
      </div>
    </div>
    <div className="certificates-card">
      <div>
      <a href="https://drive.google.com/file/d/1PAGTt7HdIS_Cg4gV6cjcjum60PoJ0563" target="_blank" rel="noopener noreferrer">
          <p>Banco de Dados e SQL</p>
        </a>
      </div>
    </div>
    <div className="certificates-card">
      <div>
        <a href="https://drive.google.com/file/d/1pSeDBLK_IPBxpIz0ke4Lb5idBykGyIrx/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <p>Desenvolvimento Web Completo com JavaScript</p>
        </a>
      </div>
    </div>
    <a href="https://drive.google.com/drive/folders/1-1-oyfogSyc2N2Z8GamslzTXBadMh3Oa" className="btn">
      Ver mais
    </a>
    <img src={AvatarTech} alt="NicolyTech" />
  </section>;
};

export default CertificatesContainer;