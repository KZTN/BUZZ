import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

export default function Header() {
  return (
    <header>
        <div className="box-logo">
          <h1>buz</h1>
          <h1>z</h1>
        </div>
        <div className="box-text">
          <span>Seu aplicativo de vouchers</span>
        </div>
      <div className="box-actions">
          <div className="box-account">
          <Link to="/BUZZ/profile"><span>Minha conta</span></Link>
          </div>
          <div className="box-voucher">
             <Link to="/BUZZ/vouchers"><span>Vouchers</span></Link>
          </div>
          <div className="box-sell">
             <span>Venda</span>
          </div>
          <div className="box-about">
             <span>Sobre</span>
          </div>
      </div>
    </header>
  );
}
