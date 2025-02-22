import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import en_translation from "./lang/en.json";
import es_translation from "./lang/es.json";

function App() {
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState({});

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage; // Detecta el idioma
    const language = userLang.includes("es") ? "es" : "en"; // Si el idioma es español (es) usa "es", si no "en"
    setLanguage(language);
  }, []);

  useEffect(() => {
    if (language === "en") {
      setContent(en_translation.en);
    } else if (language === "es") {
      setContent(es_translation.es);
    }
  }, [language]);

  return (
    <>
      <Navbar lang={language} content={content} />
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
