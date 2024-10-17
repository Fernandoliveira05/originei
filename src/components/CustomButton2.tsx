import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/style'; // Certifique-se de ter cores no seu arquivo de constantes

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.primary || '#333'}; /* Fundo cinza escuro */
  color: ${COLORS.white || '#FFF'}; /* Cor do texto branca */
  padding: 10px 20px; /* Espaçamento interno */
  border: none;
  border-radius: 8px; /* Bordas arredondadas */
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${COLORS.darkGray || '#FF6A00'}; /* Cor de fundo no hover */
  }

  svg {
    margin-left: 10px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px); /* Move a seta para a direita no hover */
  }
`;

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
);

const CustomButton = () => (
  <Button>
    Saiba mais
    <ArrowIcon />
  </Button>
);

export default CustomButton;
