import Navbar from "./components/Navbar";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Footer />
    </>
  );
}

export default App;
