import React, { useEffect, useState } from 'react';
import './styles.scss';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import api from '../../services/api';
import { useCookies } from 'react-cookie';

export default function ModalVoucher({ user, voucher, onClick }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const { isfavorite, setIsfavorite } = useState(false);

  async function handleFavorite() {
    await api
      .put(`/favorites/${voucher._id}`, {
        headers: { Authorization: `Bearer ${cookies.token}` },
      })
      .then(() => {
        if (isfavorite) {
          setIsfavorite(false);
        } else {
          setIsfavorite(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  user.favorites.map((favitem) => {
    if (favitem == voucher._id) {
      setIsfavorite(true);
    }
  });
  function popupWPP() {
    window.open(`https://wa.me/55${voucher.seller.phone}`, '_top');
  }
  async function handleCloseModal() {
    await onClick({});
  }
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
  return (
    <div className="modal">
      <div className="content">
        <div className="close-button">
          <span>#{voucher._id}</span>
          <button onClick={handleCloseModal}>
            <FaTimes size={24} color="#444" />
          </button>
        </div>
        <div className="details">
          <div className="box-left">
            <img src={voucher.photo} alt="" srcset="" />
          </div>
          <div className="box-right">
            <h1>
              <strong>{voucher.name}</strong>
            </h1>
            <span>{voucher.seller.name}</span>
            <h1>R${voucher.price}</h1>
            {voucher.amount > 1 ? (
              <span>Quantidade: {voucher.amount}</span>
            ) : voucher.amount === 1 ? (
              <span>Último disponível</span>
            ) : voucher.amount === 0 ? (
              <span>Esgotado</span>
            ) : null}
            <div className="contact" onClick={popupWPP}>
              <FaWhatsapp size={24} color="#fff" style={{ marginRight: 5 }} />
              <span>Entre em contato</span>
            </div>
            <div className="favorites" onClick={handleFavorite}>
              <FiStar size={24} color="#666" />
              {!isfavorite ? (
                <span>Adicionar a sua lista de desejos</span>
              ) : (
                <span>Remover da sua lista de desejos</span>
              )}
            </div>
          </div>
        </div>
        <div className="box-info">
          <div className="description">
            <h1>Descrição</h1>
            <span>{voucher.description}</span>
          </div>
          <div className="hashtags">
            <h3>Categorias</h3>
            <span>{voucher.hashtags}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
