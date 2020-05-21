import React, { useState, useEffect } from 'react';
import ActionsHeader from '../../components/ActionsHeader';
import { FaEllipsisV } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import api from '../../services/api';
import ModalVoucher from '../../components/ModalVoucher';

import './styles.scss';

export default function Favorites({ history }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [modalisopen, setModalisopen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [voucherindex, setVoucherindex] = useState(null);
  const [user, setUser] = useState(null);
  const [ischecked, setIschecked] = useState(false);
  const [listcheckboxes, setListcheckboxes] = useState([]);
  const [checkall, setCheckall] = useState(false);
  var arrlistcheckboxes = [];

  function handleCheckAll() {
    arrlistcheckboxes = [];
    if (checkall) {
      setCheckall(false);
      setIschecked(false);
      setListcheckboxes([]);
    } else {
      setCheckall(true);
      setIschecked(true);
      favorites.map((voucher, index) => {
        arrlistcheckboxes.push(index);
      });
      setListcheckboxes(arrlistcheckboxes);
    }
  }
  function evoqueModal(index) {
    setModalisopen(true);
    setVoucherindex(index);
  }
  function handleCloseModal() {
    setModalisopen(false);
  }
  async function handleDelFavorites() {
    listcheckboxes.map(async (favitem) => {
      await api
        .delete(`/favorites/${favorites[favitem]._id}`, {
          headers: { Authorization: `Bearer ${cookies.token}` },
        })
        .then(() => {
          setListcheckboxes(
            listcheckboxes.splice(listcheckboxes.indexOf(favitem), 1)
          );
          setFavorites(favorites.splice(favitem + 1, 1));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  function handleCheckBoxItem(index) {
    arrlistcheckboxes = listcheckboxes;
    if (!arrlistcheckboxes.find((elementBox) => elementBox === index)) {
      arrlistcheckboxes.push(index);
      setIschecked(true);
    } else {
      arrlistcheckboxes.splice(arrlistcheckboxes.indexOf(index), 1);
      if (arrlistcheckboxes.length === 0) {
        setIschecked(false);
      }
    }
    setListcheckboxes(arrlistcheckboxes);
  }
  useEffect(() => {
    async function getUserData() {
      await api
        .get('/user', {
          headers: { Authorization: `Bearer ${cookies.token}` },
        })
        .then((response) => {
          setUser(response.data);
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
  }, [favorites]);
  useEffect(() => {
    async function getUserData() {
      await api
        .get('/user', {
          headers: { Authorization: `Bearer ${cookies.token}` },
        })
        .then((response) => {
          setFavorites(response.data.favorites);
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
  return (
    <section id="favorites">
      <ActionsHeader />
      {modalisopen ? (
        <ModalVoucher
          voucher={favorites[voucherindex]}
          user={user}
          onClick={handleCloseModal}
        />
      ) : null}
      <div className="content">
        <div className="list-wrapper">
          <div className="section-header">
            <h1>Favoritos</h1>
          </div>
          <ul>
            <div className="ul-header">
              <div className="header-actions">
                <input
                  type="checkbox"
                  checked={checkall}
                  onClick={handleCheckAll}
                  disabled={!favorites[0]}
                  id="checkall"
                />
                <button
                  disabled={!ischecked}
                  onClick={() => handleDelFavorites()}
                >
                  Excluir
                </button>
              </div>
              <div className="header-index">
                <span>
                  Favoritos 1 - {favorites.length} de {favorites.length}
                </span>
              </div>
            </div>
            {!favorites[0] ? (
              <li style={{ width: '100vh' }}>
                Sua lista de favoritos está vazia
              </li>
            ) : (
              favorites.map((voucher, index) => (
                <li key={voucher._id}>
                  <input
                    type="checkbox"
                    id="selectall"
                    value={index}
                    checked={
                      checkall ||
                      listcheckboxes.find((elementBox) => elementBox === index)
                    }
                    onChange={(e) => handleCheckBoxItem(e.target.value)}
                  />
                  <div className="li-content">
                    <div className="li-photo">
                      <img
                        src={voucher.photo}
                        alt=""
                        onClick={() => evoqueModal(index)}
                      />
                    </div>
                    <div className="li-details">
                      <div
                        className="li-title"
                        onClick={() => evoqueModal(index)}
                      >
                        {voucher.name.length > 40 ? (
                          <span>{voucher.name.substring(0, 40)}...</span>
                        ) : (
                          <span>{voucher.name}</span>
                        )}
                      </div>
                      <div className="li-price">
                        <span>R$ {voucher.price}</span>
                      </div>
                      <div className="li-amount">
                        {voucher.amount > 1 ? (
                          <span>{voucher.amount} Disponíveis</span>
                        ) : voucher.amount === 1 ? (
                          <span>Último disponível</span>
                        ) : voucher.amount === 0 ? (
                          <span>Esgotado</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="li-actions">
                    <button
                      disabled={voucher.state === 'active' ? false : true}
                      onClick={() => evoqueModal(index)}
                    >
                      {voucher.state === 'active' ? (
                        <span>Ver Voucher</span>
                      ) : (
                        <span>Anuncio pausado</span>
                      )}
                    </button>
                    <FaEllipsisV size={20} color="#555" />
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
