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
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'OtakuCoin',
        ticker: 'OC',
        balance: 0.8,
        price: 8866.88
      },
      {
        name: 'anime Token',
        ticker: 'AT',
        balance: 39,
        price: 745.88
      },
      {
        name: 'butt coin',
        ticker: 'BC',
        balance: 0,
        price: 2000.23
      },
      {
        name: 'SafeMoon',
        ticker: 'SM',
        balance: 1000,
        price: 8555.34
      },
      {
        name: 'OtakuCoin cash',
        ticker: 'OCH',
        balance: 0,
        price: 768.99
      }
    ]
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( values ) { 
      let newValues = { ...values };
      if ( valueChangeTicker === values.ticker) {
        const randomPercentage = 0.800 + Math.random() * 0.08;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });

    this.setState({ coinData: newCoinData });
  }
  render() {
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance 
         amount={this.state.balance} 
         showBalance={this.state.showBalance} 
         handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} />
        <CoinList 
          coinData={this.state.coinData}
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
  
}

export default App;