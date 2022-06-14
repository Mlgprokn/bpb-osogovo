import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from './images/logo.png';

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="home"
          activeClass="logo"
          className="logo"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="tracks"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Трасета
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="registration"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Регистрация
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="schedule"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Програма
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Обща Информация
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Спонсори
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
