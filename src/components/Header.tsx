// Header.tsx
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { COLORS, FONTS, BREAKPOINTS  } from '../constants/style';
import logo from '../constants/assets/img/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const HeaderContainer = styled.header<{ backgroundColor: string; top?: string; left?: string }>`
  background-color: ${(props) => props.backgroundColor || COLORS.header};
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  z-index: 20;
  top: ${(props) => props.top || '0'};
  left: ${(props) => props.left || '0'};
  width: 100%;
  box-sizing: border-box;
`;


const Logo = styled.img`
  height: 90px;
  margin-right: 10%;

   @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 8vh; /* Oculta a navbar padrão em dispositivos móveis */
  }
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

    @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none; /* Oculta a navbar padrão em dispositivos móveis */
  }
`;

const MobileMenu = styled.nav<{ isOpen: boolean }>`
  display: none; /* Oculta o menu hambúrguer em desktops */

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background-color: ${COLORS.primary};
    width: 100%;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 100;
  }

  a {
    color: ${COLORS.white};
    font-family: ${FONTS.primary};
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    &:hover {
      color: ${COLORS.primary};
      font-weight: bold;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: ${COLORS.white};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block; /* Exibe o ícone hambúrguer apenas em dispositivos móveis */
  }
`;

const Header: React.FC<{ backgroundColor?: string }> = ({ backgroundColor = COLORS.header }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <Logo src={logo} alt="Originei Logo" />
      <Nav>
        <a href="/">Home</a>
        <a href="/about">Sobre a Originei</a>
        <a href="/consultor">Consultor</a>
        <a href="/Parceiro">Parceiro</a>
        <a href="/contato">Contato</a>
      </Nav>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </HamburgerIcon>
      <MobileMenu isOpen={isOpen}>
        <a href="/">Home</a>
        <a href="/about">Sobre a Originei</a>
        <a href="/consultor">Consultor</a>
        <a href="/parceiro">Parceiro</a>
        <a href="/contato">Contato</a>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
