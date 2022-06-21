import React, { useState, useEffect } from 'react';
import './Tracks.css';
import Track from './Track';

const Tracks = () => {
  const [setError] = useState(null);
  const [setIsLoaded] = useState(false);
  const [tracks, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/tracks')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="tracks" id="tracks">
      <h2 className="container-title">Трасета</h2>
      <span className="line"></span>
      <div className="container">
        {tracks.map((track, index) => (
          <Track key={index} {...track} />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
