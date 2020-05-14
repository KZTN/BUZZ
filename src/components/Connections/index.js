import React from 'react';
import './styles.scss';
import Researshingsvg from '../../assets/researching.svg'
import Emoji from '../../interfaces/emoji';
import {Link} from 'react-router-dom'
export default function Connections() {
  function handleclick() {
    window.scrollTo(0, 0);
  }

  return (
    <section id="connections">
      <div className="box-left">
          <div className="box-header">
            <h1>
              Conecte-se a vários espaços de <strong>sua preferência</strong> e encontre <strong>promoções especiais</strong>.
            </h1>
          </div>
          <div className="box-text">
              <span>Enquanto você nos ajuda nesse momento, retribuímos com ofertas imperdíveis.</span>
          </div>
          <div className="box-moreinfo">
          <Link to="/BUZZ/login"><button onClick={handleclick}><span>Entre</span></button></Link>
          </div>
      </div>
      <div className="box-right">
          <img src={Researshingsvg}/>
      </div>
    </section>
  );
}
