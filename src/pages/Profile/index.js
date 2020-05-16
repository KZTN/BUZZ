import React, {useState, useEffect} from 'react';
import Innerheader from '../../components/Innerheader';
import { FaHeart, FaStar, FaPen } from 'react-icons/fa';
import { GiTicket } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import {useCookies} from 'react-cookie'
import api from '../../services/api';
import './styles.scss';

export default function Profile({history}) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('https://media.discordapp.net/attachments/697512026251067472/711345678885847140/user-solid.png');
  function handleLogout() {
    removeCookie('token', { path: '/' });
    history.push('/BUZZ'); 
  }
useEffect(() => {
  async function getUserData() {
    const response = await api.get('/user', {headers: { Authorization: `Bearer ${cookies.token}` }});
    setName(response.data.name);
    if(response.data.thumbnail) {
      setThumbnail(response.data.thumbnail);
    }
  }
  if(cookies.token) {
    getUserData();
  } else {
    history.push('/BUZZ/login');
  }
}, []);

  return (
    <section id="profile">
      <Innerheader />
      <div className="content">
        <div className="me">
          <div className="avatar">
            <img
              src={thumbnail}
              alt="avatar"
            />
          </div>
          <div className="box-greetings">
            <span>
              Olá, <strong>{name} </strong> 
            </span>
            <div className="logout"><button title="Sair" onClick={handleLogout}> <FiLogOut size={14} color="#000" /></button></div>
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
