import React, { useState, useEffect, useMemo } from 'react';
import InnerHeader from '../../components/InnerHeader';
import { FaHeart, FaStar, FaPen, FaCamera } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { GiTicket } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { useCookies } from 'react-cookie';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Profile({ history }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [cameraisHiden, setCameraishiden] = useState(true);
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  function handleLogout() {
    removeCookie('token', { path: '/' });
    history.push('/BUZZ');
  }
  useEffect(() => {
    async function getUserData() {
      await api
        .get('/user', {
          headers: { Authorization: `Bearer ${cookies.token}` },
        })
        .then((response) => {
          setName(response.data.name);
          if (response.data.thumbnail) {
            setThumbnail(response.data.thumbnail);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (cookies.token) {
      getUserData();
    } else {
      history.push('/BUZZ/login');
    }
  }, []);

  async function handleSubmitAvatar(e) {
    e.preventDefault();
    const previewURL = URL.createObjectURL(e.target.files[0]);
    const data = new FormData();
    data.append('thumbnail', e.target.files[0]);
    await api
      .put('/users', data, {
        headers: { Authorization: `Bearer ${cookies.token}` },
      })
      .then(() => {
        setThumbnail(previewURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section id="profile">
      <InnerHeader />
      <div className="content">
        <div className="me">
          <form action=""></form>
          <div
            className="avatar"
            onMouseOver={() => setCameraishiden(false)}
            onMouseOut={() => setCameraishiden(true)}
          >
            <form
              onChange={handleSubmitAvatar}
              enctype="multipart/form-data"
              method="put"
            >
              <label id="thumbnail">
                <input type="file" accept="image/png, image/jpeg" />
                {cameraisHiden ? null : (
                  <FaCamera
                    size={52}
                    color="#ddd"
                    style={{
                      position: 'absolute',
                      marginLeft: 95,
                      marginTop: 95,
                      cursor: 'pointer',
                    }}
                  />
                )}
                <img
                  src={
                    thumbnail
                      ? thumbnail
                      : 'https://cdn.discordapp.com/attachments/697512026251067472/711345678885847140/user-solid.png'
                  }
                  alt="avatar"
                />
              </label>
            </form>
          </div>
          <div className="box-greetings">
            <span>
              Olá, <strong>{name} </strong>
            </span>
            <div className="logout">
              <button title="Sair" onClick={handleLogout}>
                <FiLogOut size={14} color="#000" />
              </button>
            </div>
          </div>
        </div>
        <div className="box-actions">
          <Link to="/BUZZ/profile/credentials">
            <div className="card-action">
              <FaPen size={64} color="#ddd" />
              <div className="card-action-title">
                <span>Dados pessoais</span>
              </div>
            </div>
          </Link>

          <div className="card-action">
            <GiTicket size={72} color="#ddd" />

            <div className="card-action-title">
              <span>Seus Vouchers</span>
            </div>
          </div>
          <Link to="/BUZZ/profile/favorites">
            <div className="card-action">
              <FaStar size={64} color="#ddd" />
              <div className="card-action-title">
                <span>Favoritos</span>
              </div>
            </div>
          </Link>
          <div className="card-action">
            <FaHeart size={64} color="#de2a42" />
            <div className="card-action-title">
              <span>Doe</span>
            </div>
          </div>
        </div>
        <Link to="/BUZZ/vouchers">
          <div className="box-search">
            <FiSearch size={64} color="#ddd" />
            <div className="card-action-title">
              <span>Busque por Vouchers</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
