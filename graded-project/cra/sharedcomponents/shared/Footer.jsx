// Footer.jsx

import React from 'react';
import '../Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h2>À propos de nous</h2>
          <p>Une description concise de votre entreprise.</p>
        </div>
        <div className="footer-section">
          <h2>Liens utiles</h2>
          <ul className="footer-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Suivez-nous</h2>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;