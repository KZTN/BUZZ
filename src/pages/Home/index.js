import React from 'react';
import './styles.scss';
import Welcome from '../../components/Welcome';
import Connections from '../../components/Connections';
import Easy from '../../components/Easy';

export default function Home() {
  return (
    <div className="container">
      <Welcome />
      <Connections />
      <Easy />
    </div>
  );
}
