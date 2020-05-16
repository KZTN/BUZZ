import React from 'react';
import { Link } from 'react-router-dom';
import Innerheader from '../../components/Innerheader'
import './styles.scss';
export default function Login() {
  return (
    <section id="login">
      <Innerheader />
      <div className="box-form">
        <div className="box-content">
          <div className="form-title">
            <h1>Olá! Digite o seu e-mail e senha</h1>
          </div>
          <form action="">
            <div className="form-element">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu email"
                required
              />
            </div>
            <div className="form-element">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Sua senha"
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className="box-signup">
          <span>
            Novo no Buzz? <Link to="/BUZZ/register"> <u>Cadastre-se</u></Link>
          </span>
        </div>
      </div>
      <div className="box-help"><div className="help-element">Esqueceu sua senha?</div> <div className="help-element">Ajuda</div></div>
    </section>
  );
}
