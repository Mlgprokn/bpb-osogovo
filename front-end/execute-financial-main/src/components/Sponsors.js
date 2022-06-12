import React from 'react';
import './Sponsors.css';
import kn from './images/kn.jpg';
import td from './images/td.jpg';

const Sponsors = () => {
  return (
    <div className="sponsors" id="sponsors">
      <h2 className="container-title">Спонсори</h2>
      <span className="line"></span>
      <div className="container">
        <div className="images">
          <img className="sponsor" src={kn} alt="onek" />
          <img className="sponsor" src={td} alt="onek" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
