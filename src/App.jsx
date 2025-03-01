import { useEffect, useState } from "react";
import en from "./lang/en.json";
import es from "./lang/es.json";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Experience from "./views/experience/Experience";
import Home from "./views/home/Home";
import Portfolio from "./views/portfolio/Portfolio";
import Skills from "./views/skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/index.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState({});

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const language = userLang.includes("es") ? "es" : "en";
    setLanguage(language);
  }, []);

  useEffect(() => {
    if (language === "en") {
      setContent(en.en);
    } else if (language === "es") {
      setContent(es.es);
    }
  }, [language]);

  return (
    <>
      <Navbar lang={content} />
      <Home lang={content} />
      <About lang={content} />
      <Experience lang={content} />
      <Skills lang={content} />
      <Portfolio lang={content} />
      <Contact lang={content} />
      <Footer lang={content} />
    </>
  );
}

export default App;
