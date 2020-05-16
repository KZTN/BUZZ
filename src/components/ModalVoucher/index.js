import React, {useEffect} from 'react';
import './styles.scss';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

export default function ModalVoucher({ voucher, onClick }) {
  async function handleCloseModal() {
    await onClick({
      });
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
    <div className="modal" >
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
            <h1>{voucher.name}</h1>
            <h3>{voucher.seller.name}</h3>
            <h4>Valor: R${voucher.price}</h4>
            <h4>Quantidade: {voucher.amount}</h4>
            <div className="contact">
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
