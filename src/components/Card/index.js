import React, {useState} from 'react'
import './styles.scss'
import ModalVoucher from '../ModalVoucher'
export default function Card({voucher}) {
  const [modalisopen, setModalisopen] = useState(false);
  function evoqueModal() {
    setModalisopen(true)
  }
  async function handleCloseModal(data) {
    setModalisopen(false);
  }
return (
    <>
    { modalisopen ? <ModalVoucher voucher={voucher} onClick={handleCloseModal}/> : null }
    <div className="card" >
    <div className="card-header">
      <div className="title" onClick={() => evoqueModal()}>
        <h3>{voucher.name}</h3>
      </div>
      <div className="seller">
        <span>{voucher.seller.name}</span>
      </div>
    </div>
    <div className="card-img" onClick={() => evoqueModal()}>
      <img
        src={voucher.photo}
        alt=""
        srcset=""
      />
    </div>
    <div className="card-info">
      <div className="description">
        <p>
          {voucher.description}
        </p>
      </div>
      <div className="hashtags">
        <span>
          <strong>{voucher.hashtags}</strong>
        </span>
      </div>
    </div>
    </div>
    </>
);
}