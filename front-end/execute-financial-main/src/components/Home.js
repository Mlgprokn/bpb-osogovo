import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [days, setTimerDays] = useState();
  const [hours, setTimerHours] = useState();
  const [minutes, setTimerMinutes] = useState();
  const [seconds, setTimerSeconds] = useState();

  let interval;

  const countDown = () => {
    let eventDate = new Date('June 4, 2023 08:30:00');
    interval = setInterval(() => {
      let today = new Date();
      let diff = eventDate - today;
      var newDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //if any of the values is less than 10, add a zero before it
        if (newDays < 10) {
          newDays = '0' + newDays;
        }

        if (newHours < 10) {
          newHours = '0' + newHours;
        }

        if (newMinutes < 10) {
          newMinutes = '0' + newMinutes;
        }

        if (newSeconds < 10) {
          newSeconds = '0' + newSeconds;
        }

        //update timer
        setTimerDays(newDays);
        setTimerHours(newHours);
        setTimerMinutes(newMinutes);
        setTimerSeconds(newSeconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="home">
      <div class="fixed-bg"></div>
      <div className="content">
        <div className="countdown">
          <section>
            <p className="time">{days}</p>
            <p className="small">Дни</p>
          </section>
          <section>
            <p className="time">{hours}</p>
            <p className="small">Часове</p>
          </section>
          <section>
            <p className="time">{minutes}</p>
            <p className="small">Минути</p>
          </section>
          <section>
            <p className="time">{seconds}</p>
            <p className="small">Секунди</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
