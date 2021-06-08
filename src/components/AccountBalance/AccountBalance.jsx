import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 1.3rem;
    text-align: left;
    padding: 1.2rem 0 1.2rem 39rem;
`;

export default function AccountBalance(props) {

    const buttonText = props.hideBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            {content}
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>
        </Section>
    );
    
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}