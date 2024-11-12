// Page.tsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { COLORS, BREAKPOINTS } from "../constants/style";
import fullImage from "../constants/assets/img/image74.svg"; // A imagem completa com o alvo e ícones

const Container = styled.div`
  padding-top: 25vh; /* Compensa a altura do header fixo */
  background-color: ${COLORS.background};
  overflow-x: hidden;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${COLORS.primary};
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 40px;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const TextOverlay = styled.div<{ top: string; left: string; color: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  max-width: 200px;
  text-align: left;
  color: ${(props) => props.color};
  font-size: 1rem;

  strong {
    font-weight: bold;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin: 5px 0 0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const CustomButton = styled.button`
  background-color: ${COLORS.header};
  color: ${COLORS.white};
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${COLORS.primary};
  }
`;

const Page: React.FC = () => {
  return (
    <Container>
      <Header backgroundColor="rgba(50, 57, 63, 1)" />

      <Title>SEJA PARCEIRO DE NEGÓCIOS</Title>
      <Description>
        Os nossos parceiros de negócios são referência em seus setores,
        destacando-se pela qualidade, inovação e valor agregado que oferecem.
        Serviços e soluções pioneiras demandam uma interação mais próxima com
        potenciais clientes e decisores, pois requerem explicação e
        demonstração detalhadas. Por isso, conseguir um espaço na agenda desses
        decisores é crucial no processo de negociação e contratação. Em resumo,
        buscamos parceiros cuja atuação na geração de negócios resulte no
        máximo valor agregado, beneficiando todas as partes envolvidas.
      </Description>

      <ContentWrapper>
        {/* Imagem completa com ícones e alvo */}
        <img src={fullImage} alt="Alvo com ícones" />

        {/* Blocos de texto sobrepostos */}
        <TextOverlay top="20%" left="10%" color={COLORS.primary}>
          <strong>Pulverização da marca</strong>
          <p>Possuímos mais de 200 consultores espalhados por todo território Brasileiro...</p>
        </TextOverlay>

        <TextOverlay top="40%" left="10%" color={COLORS.secondary}>
          <strong>Gestão humanizada e especializada</strong>
          <p>Nossas equipes qualificam a entrada das indicações...</p>
        </TextOverlay>

        <TextOverlay top="60%" left="10%" color={COLORS.secondary}>
          <strong>Plataforma tecnológica</strong>
          <p>Unimos a gestão humanizada do nosso time a uma plataforma...</p>
        </TextOverlay>
      </ContentWrapper>

      <ButtonContainer>
        <CustomButton>Fale conosco ➔</CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default Page;
