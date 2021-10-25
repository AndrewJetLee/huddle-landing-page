import React from 'react'
import { StyledHeader, StyledNav, StyledLogo } from './styles/Header.styled';
import { StyledButton } from './styles/Button.styled'
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledImage } from './styles/Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <StyledLogo src='./images/logo.svg' alt=''></StyledLogo>
                    <StyledButton>Try It Free</StyledButton>
                </StyledNav>

                <Flex>
                    <div>
                        <h1>
                            Build The Community Your Fans Will Love
                        </h1>
                        <p>
                            Huddle re-imagines the way we build communities. You have a voice, but 
                            so does your audience. Create connections with your users as you engage in genuine discussion. 
                        </p>

                        <StyledButton bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </StyledButton>

                    </div>
                    <StyledImage src='./images/illustration-mockups.svg' alt=''/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
