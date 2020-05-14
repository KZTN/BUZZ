import React from 'react';
import './App.scss';
import Routes from './routes';
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <div className="container">
      <Nav/>
        <main className="content">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default App;
