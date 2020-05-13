import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Routes from './routes';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <main className="content">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default App;
