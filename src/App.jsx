import Navbar from "./components/Navbar";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
