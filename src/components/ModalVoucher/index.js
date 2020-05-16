import React, { useEffect } from 'react';
import './styles.scss';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

export default function ModalVoucher({ voucher, onClick }) {
  function popupWPP() {
    window.open(
            `https://wa.me/55${voucher.seller.phone}`,
            '_top'
        );
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
            <h1><strong>{voucher.name}</strong></h1>
            <span>{voucher.seller.name}</span>
            <h1>R${voucher.price}</h1>
            <span>Quantidade: {voucher.amount}</span>
            <div className="contact" onClick={popupWPP}>
              <FaWhatsapp size={24} color="#fff" style={{ marginRight: 5 }} />
              <span>Entre em contato</span>
            </div>
            <div className="favorites">
              <FiStar size={24} color="#666" />{' '}
              <span>Adicionar a sua lista de desejos</span>
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
