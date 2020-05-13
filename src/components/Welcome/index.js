import React from 'react';
import './styles.scss';
import Heartsvg from '../../assets/heart.svg'
import Emoji from '../../interfaces/emoji';
export default function Welcome() {
  return (
    <main className="welcome">
      <div className="box-left">
        <header>
          <div className="box-header">
            <h1>
              Compre um vale-presente hoje, para o seu 
              <strong> lugar favorito</strong> não fechar amanhã.
            </h1>
          </div>
          <div className="box-text">
              <span>Com a situação não anda fácil, estamos nos adaptando a você.</span>
          </div>
          </header>
          <div className="box-moreinfo">
              <span>Saiba Mais</span>
          </div>
      </div>
      <div className="box-right">
          <img src={Heartsvg}/>
      </div>
    </main>
  );
}
