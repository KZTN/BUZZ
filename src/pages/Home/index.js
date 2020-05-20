import React from 'react';
import './styles.scss';
import Welcome from '../../components/Welcome';
import Connections from '../../components/Connections';
import Easy from '../../components/Easy';
import MainHeader from '../../components/MainHeader';
import Nav from '../../components/Nav'
export default function Home() {
  return (
    <div id="container-home">
      <Nav />
      <MainHeader />
      <Welcome />
      <Connections />
      <Easy />
    </div>
  );
}
