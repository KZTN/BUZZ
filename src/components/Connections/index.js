import React from 'react';
import './styles.scss';
import Researshingsvg from '../../assets/researching.svg'
import Emoji from '../../interfaces/emoji';
export default function Connections() {
  return (
    <main className="connections">
      <div className="box-left">
        <header>
          <div className="box-header">
            <h1>
              Conecte-se a vários espaços de <strong>sua preferência</strong> e encontre <strong>promoções especiais</strong>.
            </h1>
          </div>
          <div className="box-text">
              <span>Enquanto você nos ajuda nesse momento, retribuímos com ofertas imperdíveis.</span>
          </div>
          </header>
          <div className="box-moreinfo">
              <span>Entre</span>
          </div>
      </div>
      <div className="box-right">
          <img src={Researshingsvg}/>
      </div>
    </main>
  );
}
