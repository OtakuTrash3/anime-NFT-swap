import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
  	
const img = styled.img `
height: 3rem; 
pointer-events: none;
`;
  
const Header = styled.header`
background-color: #58559c;
min-height: 39vh; 
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: rgba(223, 189, 255, 0.753);
`;

const H1 = styled.h1`
  font-size: 6rem;
`;

export default class ExchangeHeader extends Component {
  render() {
    return (
      <Header>
        <img src={logo} alt="React logo" />
        <H1>
          anime NFT swap
        </H1>
      </Header>
    )
  }
}