import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
export default function Register() {
  return (
    <section id="register">
      <header className="login-header">
        <div className="box-logo">
          <Link to="/BUZZ">
            <h3>buzz</h3>
          </Link>
        </div>
        <div className="header-element">
          <span>Contato</span>
        </div>
      </header>
      <div className="box-form">
        <div className="box-content">
          <div className="form-title">
            <h1>Complete os seus dados</h1>
          </div>
          <form action="">
            <div className="form-section">
              <div className="form-element">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome completo"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Telefone"
                  required
                />
              </div>
            </div>
            <div className="form-section">
              <div className="form-element">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                  required
                />
              </div>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="box-signup">
          <span>
            Já possui um cadastro? <Link to="/BUZZ/login"><u>Entre</u></Link>
          </span>
        </div>
      </div>
      <div className="box-help">
        <div className="help-element">Ao cadastrar, você concorda com os <u>Termos de Serviço.</u></div>
      </div>
    </section>
  );
}
