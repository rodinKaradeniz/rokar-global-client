import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20, // initial position
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // animation speed
        delay: 0.4, // latency to make sure images are loaded before animation
      },
    },
    exit: {
      opacity: 0,
      y: -20, // exit position
      transition: {
        duration: 0.6, // animation speed
      },
    },
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="home"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Home />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/services"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="services"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Services />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/projects"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="projects"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Projects />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="about"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <About />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/careers"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="careers"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Careers />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="contact"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
