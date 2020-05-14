import React from 'react'
import './styles.scss'
export default function Card() {
return (
    <div className="card">
    <div className="card-header">
      <div className="title">
        <h3>Pizzas e serviços de jantares</h3>
      </div>
      <div className="seller">
        <span>La Cucina Piemontese</span>
      </div>
    </div>
    <div className="card-img">
      <img
        src="https://images.unsplash.com/photo-1560202212-441ad59100fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
        alt=""
        srcset=""
      />
    </div>
    <div className="card-info">
      <div className="description">
        <p>
          Opcões imperdíveis em serviço na nossa rede de restaurantes e
          pizzarias, compre um voucher e receba mais pelo preço que pagou.
        </p>
      </div>
      <div className="hashtags">
        <span>
          <strong>#comida</strong> <strong>#pizza</strong>
          <strong>#restaurante</strong> <strong>#pizzaria</strong>
        </span>
      </div>
    </div>
    </div>
);
}