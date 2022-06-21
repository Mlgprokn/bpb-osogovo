import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <div className="registration" id="registration">
      <div className="container">
        <h2 className="container-title">Регистрация</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Име и фамилия"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-signature"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Местожителство"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-map-marker"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <div className="select is-fullwidth">
                  <select>
                    <option selected>Мъж</option>
                    <option>Жена</option>
                    <option>Друго</option>
                  </select>
                </div>
                <div className="icon is-small is-left">
                  <i className="fas fa-venus-mars"></i>
                </div>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Възраст" />
                <span className="icon is-small is-left">
                  <i className="fas fa-child"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <div className="select is-fullwidth">
                  <select>
                    <option selected>"Всеки може...": 1 км</option>
                    <option>"Стига да иска...": 5 км</option>
                    <option>"Да помага!": 11 км</option>
                  </select>
                </div>
                <span className="icon is-small is-left">
                  <i className="fas fa-running"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Телефонен номер"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-phone"></i>
                </span>
              </p>
            </div>
            <div className="field level-right">
              <button className="button is-primary level-right">
                Регистрирай се!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
