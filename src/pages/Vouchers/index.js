import React, { useState, useEffect } from 'react';
import Litenav from '../../components/Litenav';
import Card from '../../components/Card';
import api from '../../services/api'
import './styles.scss';
export default function Vouchers() {
  const [city, setCity] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [filter, setFilter] = useState('');
  async function getCords() {
    if(!city) {
      const apigeolocation = await fetch('https://location.services.mozilla.com/v1/geolocate?key=test').then(el=>el.json())
      const apicity = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${apigeolocation.location.lat}&longitude=${apigeolocation.location.lng}&localityLanguage=en`).then(el=>el.json())
      setCity(apicity.locality);
      const response = await api.get(`/vouchers/cidade/${apicity.locality}`);
      setVouchers(response.data);
    } else {
      const response = await api.get(`/vouchers/cidade/${city}`);
      setVouchers(response.data);
      setFilter('');
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        getCords();
      },
      (err) => {
        console.log(err);
        if(err.code === 2) {
          getCords();
        }
      },
      {
        enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
      }
    );
  }, []);

  async function handleInputField(data) {
    const response = await api.get(`/vouchers/cidade/${city}/filtro/${data.inputfield}`);
    setVouchers(response.data);
    setFilter(data.inputfield);
    window.scrollTo(0, 0);
  }
    return (
    <section id="vouchers">
      <Litenav onSubmit={handleInputField} />
      <div className="content">
      <div className="box-info-results">
        <div className="info-results">
        <span>{filter? `Resultados da categoria: ${filter}` : null}</span>
        </div>
        <div className="box-revert" onClick={getCords}>
          <span>{filter? `Remover filtros de pesquisa` : null}</span>
        </div>
      </div>
          {vouchers.map(voucher => (
            <Card key={voucher._id} voucher={voucher}/>
          ))}
      </div>
    </section>
  );
}
