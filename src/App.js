import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-rose">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Accueil
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/education">
                    Formation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">
                    Expérience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/certifications">
                    Certifications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer bg-rose text-center">
          <div className="container">
            <p>&copy; 2023 NadaHANSAL. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;