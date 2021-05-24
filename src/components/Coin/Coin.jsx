import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1.2px solid #cccccc;
    width: 25wh;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        // pervent the default action of submitting
        event.perventDefault();


        this.props.handleRefresh(this.props.ticker);
/*
        const randomPercentage = 0.800 + Math.random() * 0.08;
        this.setState( function(oldState) {
            return {
               price: oldState.price * randomPercentage
            };
        });
*/
    }
    
    render() {
        return (  
            <tr>
              <Td>{this.props.name}</Td>
              <Td>{this.props.ticker}</Td>
              <Td>${this.props.price}</Td>
              <Td>
                  <form action= "#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                  </form>
              </Td>
            </tr>
          );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}