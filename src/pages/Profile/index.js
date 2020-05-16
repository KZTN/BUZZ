import React, {useState, useEffect} from 'react';
import Innerheader from '../../components/Innerheader';
import { FaHeart, FaStar, FaPen } from 'react-icons/fa';
import { GiTicket } from 'react-icons/gi';
import './styles.scss';

export default function Profile() {

  
  return (
    <section id="profile">
      <Innerheader />
      <div className="content">
        <div className="me">
          <div className="avatar">
            <img
              src="https://avatars0.githubusercontent.com/u/6463299?s=400&u=4461e9ccc7bb327fc8183a09c3da015c832924d6&v=4"
              alt="avatar"
            />
          </div>
          <div className="box-greetings">
            <span>
              Olá, <strong>Kaio César</strong>
            </span>
          </div>
        </div>
        <div className="box-actions">
          <div className="card-action">
            <FaPen size={64} color="#ddd" />

            <div className="card-action-title">
              <span>Dados pessoais</span>
            </div>
          </div>
          <div className="card-action">
            <GiTicket size={72} color="#ddd" />

            <div className="card-action-title">
              <span>Seus Vouchers</span>
            </div>
          </div>
          <div className="card-action">
            <FaStar size={64} color="#ddd" />

            <div className="card-action-title">
              <span>Favoritos</span>
            </div>
          </div>
          <div className="card-action">
            <FaHeart size={64} color="#de2a42" />
            <div className="card-action-title">
              <span>Doe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
