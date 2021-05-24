import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 1.3rem;
    text-align: left;
    padding: 1.2rem 0 1.2rem 18rem;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
              Account Balance: ${this.props.amount}
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}