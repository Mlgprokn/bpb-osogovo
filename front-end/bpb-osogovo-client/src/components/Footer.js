import React from 'react';
import './Footer.css';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">
              <BsFacebook />
            </a>
          </li>
          <li className="nav-item">
            <a href="#about">
              <BsInstagram />
            </a>
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
