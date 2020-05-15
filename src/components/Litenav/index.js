import React, { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
export default function Litenav() {
  const [boxactions, setBoxactions] = useState(false);
  function handleActiveBoxActions() {
    console.log('ta desativado');

    setBoxactions(true);
  }
  function handleDisableBoxActions() {
    console.log('ta desativado');
    setBoxactions(false);
  }
  return (
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
        <button onClick={handleActiveBoxActions}>
          <span>Olá visitante</span>
        </button>
        <div className="icon-user">
          <FaUser size={25} color="#888" />
        </div>
        <div
          className={boxactions ? 'actions active' : 'actions disable'}
          onMouseOver={handleActiveBoxActions}
          onMouseOut={handleDisableBoxActions}
        >
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
  );
}
