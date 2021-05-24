import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(216, 114, 148);
  color:rgb(76, 44, 88);
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'OtakuCoin',
          ticker: 'OC',
          price: 8866.88
        },
        {
          name: 'anime Token',
          ticker: 'AT',
          price: 745.88
        },
        {
          name: 'butt Coin',
          ticker: 'BC',
          price: 3000.89
        },
        {
          name: 'SafeMoon',
          ticker: 'SM',
          price: 8555.34
        },
        {
          name: 'OtakuCoin cash',
          ticker: 'OCH',
          price: 768.99
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function({ticker, name, price} ) { 
      let newPrice = price;
      if ( valueChangeTicker === ticker) {
        const randomPercentage = 0.800 + Math.random() * 0.08;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });

    this.setState({ coinData: newCoinData });
  }
  render() {
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
  
}

export default App;
