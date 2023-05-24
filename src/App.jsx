import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import TechStack from "./components/Techstack";
// import ProjectItem from "./components/ProjectItem";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Main />
      <Projects />
      <Work />
      <Skills/>
      <Contact />
      <Footer />
      <TechStack/>
      {/* <ProjectItem/> */}
    </div>
  );
}

export default App;
