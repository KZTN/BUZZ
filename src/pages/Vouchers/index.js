import React, {useState} from 'react';
import Livenav from '../../components/Litenav'
import Card from '../../components/Card';
import './styles.scss';
export default function Vouchers() {

  return (
    <section id="vouchers">

      <main>
        <Livenav/>
        <Card/>
        <Card/>
      </main>
    </section>
  );
}
