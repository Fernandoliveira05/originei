import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS, BREAKPOINTS } from '../constants/style';
import logo from '../constants/assets/img/logo.png'

const HeaderContainer = styled.header`
  background-color: ${COLORS.header};
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: 90%; 
`;

const Logo = styled.img`
  height: 90px;
  margin-right: 10%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: ${COLORS.white};
    font-family: ${FONTS.primary};
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: ${COLORS.primary};
      font-weight: bold;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
    <Logo src={logo} alt="Originei Logo" />
      <Nav>
        <a href="/">Home</a>
        <a href="/about">Sobre a Originei</a>
        <a href="/consultor">Consultor</a>
        <a href="/parceiro">Parceiro</a>
        <a href="/contato">Contato</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
