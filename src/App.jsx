import Header from "./components/header/Header";
import Middle from "./components/middle/Middle";
import Home from "./components/home/Home";
import TechContainer from "./components/tech/TechContainer";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import FooterContainer from "./components/footer/FooterContainer";



function App() {

  return (
    <div id="portfolio">
      <Header />
      <Home />
      <Middle />
      <TechContainer />
      <ProjectsContainer />
      <FooterContainer />
    </div>
  );  
}

export default App
