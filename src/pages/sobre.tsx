import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../constants/style";
import Header from "../components/Header";
import BrazilMap from "../constants/assets/img/MapaN.svg"; // Nova imagem do mapa do Brasil com pontos e setas embutidos

const Container = styled.div`
  background-color: ${COLORS.background};
`;

const MainContent = styled.main`
  text-align: center;
  padding: 40px 20px;
  

  h1 {
    margin-top: 20vh;
    font-size: 1.5rem;
    color: ${COLORS.box};
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 20px;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const MapSection = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  img {
    width: 100%;
    height: auto;
  }
`;

const Page = () => {
  return (
    <Container>
      <Header backgroundColor="rgba(50, 57, 63, 1)" />

      <MainContent>
        <h1>
          Somos uma plataforma inovadora dedicada a transformar a maneira como
          produtos e serviços financeiros são oferecidos e acessados no Brasil
        </h1>
      </MainContent>

      <MapSection>
        {/* Exibindo apenas a imagem do mapa com pontos e setas embutidos */}
        <img src={BrazilMap} alt="Mapa do Brasil com pontos e setas" />
      </MapSection>
    </Container>
  );
};

export default Page;
