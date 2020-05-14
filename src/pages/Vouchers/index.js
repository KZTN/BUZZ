import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import Card from '../../components/Card';
import './styles.scss';
export default function Vouchers() {
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  const [boxactions, setBoxactions] = useState(false);
  function handleActiveBoxActions() {
    console.log('ta desativado');

    setBoxactions(true);
  }
  function handleDisableBoxActions() {
    sleep(10);
    console.log('ta desativado');
    setBoxactions(false);
  }
  return (
    <section id="vouchers">
      <div className="lite-nav">
        <div className="box-logo">
          <h3>buzz</h3>
        </div>
        <div className="box-search">
          <FaSearch
            size={14}
            color="#888"
            style={{ margin: 'auto 0 auto 10px' }}
          />
          <form action="">
            <input
              type="text"
              name="search"
              placeholder="Busque por categorias"
            />
          </form>
        </div>
        <div className="box-actions" onMouseLeave={handleDisableBoxActions}>
          <button onClick={handleActiveBoxActions}><span>Olá visitante</span></button>
          <div className="icon-user">
            <FaUser size={25} color="#888" />
          </div>
          <div className={boxactions? "actions active": "actions disable"} onMouseOver={handleActiveBoxActions} onMouseOut={handleDisableBoxActions}>
            <div className="action-item">
              <a href="#">Minha Conta</a>
            </div>
            <div className="action-item">
              <a href="#">Favoritos</a>
            </div>
            <div className="action-item">
              <a href="#">Vender</a>
            </div>
            <div className="action-item">
              <a href="#">Sair</a>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Card/>
        <Card/>
      </main>
    </section>
  );
}
