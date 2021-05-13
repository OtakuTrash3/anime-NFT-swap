import React, { Component } from 'react';
import './coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        // pervent the default action of submitting
       event.perventDefault();

        const randomPercentage = 0.800 + Math.random() * 0.08;
        this.setState( function(oldState) {
            return {
               price: oldState.price * randomPercentage
            };
        });
    }
    render() {
        return (  
            <tr className="coin-row">
              <td>{this.props.name}</td>
              <td>{this.props.ticker}</td>
              <td>${this.state.price}</td>
              <td>
                  <form action= "#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                  </form>
              </td>
            </tr>
          );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}