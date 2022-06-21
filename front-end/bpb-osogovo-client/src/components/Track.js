import React from 'react';
import { Link } from 'react-scroll';

const Track = (track) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="fill">
          <img
            className="fill"
            src={require('' + track.image)}
            alt={track.title}
          />
        </figure>
      </div>
      <div className="card-content card columns is-multiline">
        <p className="title column is-half is-offset-one-quarter">
          {track.title}
        </p>
        <div className="content column is-half is-offset-one-quarter">
          <div className="characteristic">
            <p className="characteristic-name">Дължина: </p>
            <p className="characteristic-value">{track.length}</p>
            <p />
          </div>
          <div className="characteristic">
            <p className="characteristic-name">Денивелация: </p>
            <p className="characteristic-value">{track.displacement}</p>
            <p />
          </div>
          <div className="characteristic">
            <p className="characteristic-name">
              Надморска височина на старт/финала:{' '}
            </p>
            <p className="characteristic-value">
              {track.altitudeAtStartFinish}
            </p>
            <p />
          </div>
          <div className="characteristic">
            <p className="characteristic-name">Най-ниска точка: </p>
            <p className="characteristic-value">{track.lowestPoint}</p>
            <p />
          </div>
          <div className="characteristic">
            <p className="characteristic-name">Най-висока точка: </p>
            <p className="characteristic-value">{track.highestPoint}</p>
            <p />
          </div>
          <div className="characteristic">
            <p className="characteristic-name">Подкрепителен пункт: </p>
            <p className="characteristic-value">
              {track.hasAidStation ? 'Има' : 'Няма'}
            </p>
            <p />
          </div>
          <div className="characteristic">
            <p className="characteristic-name">Контролно време: </p>
            <p className="characteristic-value">{track.controlTime}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <Link
          className="card-footer-item"
          activeClass="active"
          to="registration"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="button is-primary is-rounded is-fullwidth">
            Регистрация
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Track;
