import React from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../constants/style';

const FooterContainer = styled.footer`
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  padding: 40px 20px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2024 Originei. Todos os direitos reservados.</p>
      <p>Rua Pinheiros, 123, Pinheiros - SP</p>
    </FooterContainer>
  );
};

export default Footer;
