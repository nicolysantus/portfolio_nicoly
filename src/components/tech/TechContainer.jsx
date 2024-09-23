import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiMsqlServer,
  DiDotnet,
  DiPython,
  DiSass
} from 'react-icons/di'

import '../tech/techcontainer.sass'

const stack = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />},
  { id: "css", name: "CSS", icon: <DiCss3 />},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
  { id: "react", name: "React", icon: <DiReact />},
  { id: "sass", name: "Sass", icon: <DiSass />},
  { id: "dotnet", name: ".NET", icon: <DiDotnet />},
  { id: "sql", name: "SQL Server", icon: <DiMsqlServer />},
  { id: "python", name: "Python", icon: <DiPython />},
];

const TechContainer = () => {
  return <section id='tech'>
    <h2>TECNOLOGIAS</h2>
    <p>Tecnologias em que possuo conhecimento, seja em ambiente profissional ou acadêmico.</p>
    <div className="tech-grid">
      {stack.map((tech) => (
        <div className="tech-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="tech-info">
            <h3>{tech.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>;
};

export default TechContainer;