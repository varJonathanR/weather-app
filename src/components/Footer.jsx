import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterStyled>
            <p>Created by <a href="https://github.com/varJonathanR" target="_blank" rel="noopener noreferrer">varJonathanR</a> - <a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer">devChallenges.io</a></p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    margin-top: 1rem;
    text-align: center;
    width: 100%;

    & p, & a {
        text-decoration: none;
        color: var(--gray);
    }
`;