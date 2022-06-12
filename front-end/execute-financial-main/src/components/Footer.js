import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Facebook icon</a>
          </li>
          <li className="nav-item">
            <a href="#about">Instragram icon</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>Благотворително планинско бягане Осогово</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
