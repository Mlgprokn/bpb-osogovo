import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Event from './components/Event';
import Tracks from './components/Tracks';
import Registration from './components/Registration';
import Schedule from './components/Schedule';
import Info from './components/Info';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

function App() {
  //scroll to top button
  const [showButton, setShowButton] = useState(false);

  //scroll to top button show
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  return (
    <div>
      <Navbar />
      <Home />
      <Event />
      <Tracks />
      <Registration />
      <Schedule />
      <Info />
      <Sponsors />
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            <BsArrowUpCircle />
          </Link>
        </button>
      )}
    </div>
  );
}

export default App;
