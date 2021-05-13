import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo"/>
        <h1 className="App-title">
          Anime NFT swap
        </h1>
      </header>
     <table className="coin-table">
     <thead>
        <tr>
         <th>Name</th>
         <th>ticker</th>
         <th>price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name="Otaku Coin" ticker="OC" price={8866.88} />
        <Coin name="anime Token" ticker="AT" price={745.88} />
        <Coin name="butt Coin" ticker="BC" price={3000.89} />
        <Coin name="SafeMoon" ticker="SM" price={8859.34} />
      </tbody>
    </table>
    </div>
  );
}

export default App;
