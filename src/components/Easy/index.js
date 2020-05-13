import React from 'react';
import './styles.scss';
import Chatsvt from '../../assets/chat.svg'
import Emoji from '../../interfaces/emoji';
export default function Easy() {
  return (
    <main className="welcome">
      <div className="box-left">
        <header>
          <div className="box-header">
            <h1>Simples, fácil e prático.</h1>
            <h1> A venda é feita diretamente com o vendedor. 
            </h1>
          </div>
          <div className="box-text">
              <span>O Buzz entende a dificuldade que você está passando. Por isso, não cobramos taxas, inscrição e nem adesão. Queremos ajudar você</span>
          </div>
          </header>
          <div className="box-moreinfo">
              <span>Venda hoje</span>
          </div>
      </div>
      <div className="box-right">
          <img src={Chatsvt}/>
      </div>
    </main>
  );
}
