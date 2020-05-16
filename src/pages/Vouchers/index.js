import React, { useState, useEffect } from 'react';
import Litenav from '../../components/Litenav';
import Card from '../../components/Card';
import './styles.scss';
import api from '../../services/api'
export default function Vouchers() {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [city, setCity] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [textfield, setTextfiled] = useState('');
  const [inputfield, setInputfield] = useState('');
  async function getCords() {
    const apigeolocation = await fetch('https://location.services.mozilla.com/v1/geolocate?key=test').then(el=>el.json())
    const apicity = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${apigeolocation.location.lat}&longitude=${apigeolocation.location.lng}&localityLanguage=en`).then(el=>el.json())
    setCity(apicity.locality);
    const response = await api.get(`/vouchers/cidade/${apicity.locality}`);
    setVouchers(response.data);
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
    console.log('o valor que eu recebi foi: ' + data.inputfield);
    const response = await api.get(`/vouchers/cidade/${city}/${data.inputfield}`);
    setVouchers(response.data)
  }
    return (
    <section id="vouchers">
      <Litenav onSubmit={handleInputField} />
      <div className="content">
          {vouchers.map(voucher => (
            <Card key={voucher._id} title={voucher.name} photo={voucher.photo} description={voucher.description} hashtags={voucher.hashtags} seller={voucher.seller.name}/>
          ))}
      </div>
    </section>
  );
}
