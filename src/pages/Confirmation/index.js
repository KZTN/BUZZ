import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../../components/InnerHeader';
import './styles.scss';
import { useCookies } from 'react-cookie';
export default function Confirmation({ history }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  useEffect(() => {
    if (cookies.token) {
      history.push('/BUZZ/profile');
    }
  }, []);
  return (
    <section id="confirmation">
      <InnerHeader />
      <div className="box-form">
        <div className="box-content">
          <div className="form-title">
            <h1>Enviamos um email para você</h1>
          </div>
          <div className="box-content">
            <div className="content-header">
              <p>
                Verifique sua caixa de email e confirme seu cadastro acessando o
                link que te mandamos.
              </p>
            </div>
            <div className="content-element">
              <span>Tudo pronto? Basta entrar com sua conta agora.</span>
              <Link to="/BUZZ/login">
                <button>Entrar</button>
              </Link>
            </div>
            <div className="content-element">
              <span>Não recebeu nada?</span>
              <button>Re-enviar email</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
