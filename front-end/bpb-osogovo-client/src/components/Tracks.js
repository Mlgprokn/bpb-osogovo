import React from 'react';
import onek from './images/onek.png';
import fivek from './images/fivek.png';
import './Tracks.css';

const Tracks = () => {
  return (
    <div className="tracks" id="tracks">
      <h2 className="container-title">Трасета</h2>
      <span className="line"></span>
      <div className="container">
        <div className="card">
          <div className="content">
            <img src={onek} alt="onek" />
            <div className="col-2">
              <h3>"Всеки може...": 1 км; 34 D+;</h3>
              <span className="line"></span>
              <div className="characteristic">
                <p className="characteristic-name">Дължина: </p>
                <p className="characteristic-value">1 километър</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Денивелация: </p>
                <p className="characteristic-value">+34 м, -34 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">
                  Надморска височина на старт/финала:{' '}
                </p>
                <p className="characteristic-value">543 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Най-ниска точка: </p>
                <p className="characteristic-value">543 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Най-висока точка: </p>
                <p className="characteristic-value">577 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Подкрепителен пункт: </p>
                <p className="characteristic-value">Няма</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Контролно време: </p>
                <p className="characteristic-value">Няма</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="content">
            <img src={fivek} alt="onek" />
            <div className="col-2">
              <h3>"Стига да иска...": 5 км; 266 D+;</h3>
              <span className="line"></span>
              <div className="characteristic">
                <p className="characteristic-name">Дължина: </p>
                <p className="characteristic-value">5 километър</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Денивелация: </p>
                <p className="characteristic-value">+266 м , -266 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">
                  Надморска височина на старт/финала:{' '}
                </p>
                <p className="characteristic-value">543 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Най-ниска точка: </p>
                <p className="characteristic-value">543 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Най-висока точка: </p>
                <p className="characteristic-value">801 м</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Подкрепителен пункт: </p>
                <p className="characteristic-value">Няма</p>
                <p />
              </div>
              <div className="characteristic">
                <p className="characteristic-name">Контролно време: </p>
                <p className="characteristic-value">Няма</p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
