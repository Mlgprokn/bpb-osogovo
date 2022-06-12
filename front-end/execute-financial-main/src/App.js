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

function App() {
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
    </div>
  );
}

export default App;
