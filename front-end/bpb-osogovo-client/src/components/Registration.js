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
            <form>
              <div class="field">
                <input type="text" name="number" />
                <span></span>
                <label>Име</label>
              </div>
              <br />
              <div class="field">
                <input type="text" name="number" />
                <span></span>
                <label>Email</label>
              </div>
              <br />
              <div class="field">
                <input type="text" name="number" />
                <span></span>
                <label>Пол</label>
              </div>
              <br />
              <div class="field">
                <input type="text" name="number" />
                <span></span>
                <label>Възраст</label>
              </div>
              <br />
              <div class="field">
                <input type="text" name="marsh" />
                <span></span>
                <label>Избор на маршрут</label>
              </div>
              <br />
              <div class="field">
                <input type="text" name="number" />
                <span></span>
                <label>Телефонен номер</label>
              </div>
              <br />
              <input type="submit" value="Регистрирай се!" className="button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
