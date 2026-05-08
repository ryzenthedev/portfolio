// IMPORTING STYLES

import "./style/general.css"
import 'aos/dist/aos.css';
import 'nprogress/nprogress.css'
// hidden author: seriferenbilgic

// IMPORT PACKAGES

import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from 'aos';

// IMPORT COMPONENTS

import NavigationBar from "./components/navbar.jsx"
import ScrollToTop from "./components/scrolltop";
import Footer from "./components/footer.jsx"
import MagicCursor from "./components/cursor";

// IMPORT DATA

import { MainContext as userContext } from "./context/userData.js"
import { LanguageProvider } from "./context/languageContext.js"
import userData from "./data/user.js"

// IMPORT PAGES

import Home from "./pages/home"
import Projects from "./pages/projects"
import About from "./pages/about"
import Contact from "./pages/contact"

export default function App() {

  useEffect(() => {
    Aos.init({ duration: 900, once: true, mirror: false })

    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  let user = userData()

  return (
    <LanguageProvider>
      <Router>
        <userContext.Provider value={user}>
          <div className="wrap">
            <div className="wrapper">
              <NavigationBar/>
              <ScrollToTop/>
              <main className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer/>
            </div>
            <MagicCursor/>
          </div>
        </userContext.Provider>
      </Router>
    </LanguageProvider>
  )

}