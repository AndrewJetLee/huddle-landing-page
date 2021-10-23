import React from 'react'
import { StyledHeader, StyledNav, StyledLogo } from './styles/Header.styled';
import { StyledButton } from './styles/Button.styled'
import { Container } from './styles/Container.styled';


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <StyledLogo src='./images/logo.svg' alt=''></StyledLogo>
                    <StyledButton>Try It Free</StyledButton>
                </StyledNav>
            </Container>
        </StyledHeader>
    )
}

export default Header
