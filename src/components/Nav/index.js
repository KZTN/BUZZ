import React from 'react';
import './styles.scss';

export default function Nav() {
  return (
    <nav>
        <div className="box-logo">
          <h1>buz</h1>
          <h1>z</h1>
        </div>
        <div className="box-text">
          <span>Seu aplicativo de vouchers</span>
        </div>
      <div className="box-actions">
          <div className="box-account">
             <span>Minha conta</span>
          </div>
          <div className="box-voucher">
             <span>Vouchers</span>
          </div>
          <div className="box-sell">
             <span>Venda</span>
          </div>
          <div className="box-about">
             <span>Sobre</span>
          </div>
      </div>
    </nav>
  );
}
