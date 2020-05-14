import React from 'react';
import './styles.scss';
import Welcome from '../../components/Welcome';
import Connections from '../../components/Connections';
import Easy from '../../components/Easy';
import Header from '../../components/Header';
import Nav from '../../components/Nav'
export default function Home() {
  return (
    <div id="container-home">
      <Nav />
      <Header />
      <Welcome />
      <Connections />
      <Easy />
    </div>
  );
}
