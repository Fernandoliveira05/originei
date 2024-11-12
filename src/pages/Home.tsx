import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../constants/style";
import Header from "../components/Header";
import fundo from "../constants/assets/img/teste.jpeg";
import hand from '../constants/assets/img/handshakingoriginei.jpeg';
import CustomButton from "../components/CustomButton"; // Mantemos o CustomButton importado
import CustomButton2 from "../components/CustomButton2";
import predio from '../constants/assets/img/predio.png'

const Container = styled.div`
  background-color: ${COLORS.background};
`;

const HeroSection = styled.section`
  position: relative;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); /* Ajuste a opacidade para mais ou menos escuridão */
    transition: opacity 1s ease-in-out; /* Efeito de fade-in suave */
    opacity: 0;
    animation: fadeInOverlay 3s forwards;
  }

  @keyframes fadeInOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h1 {
    position: relative;
    font-family: "Open Sans", sans-serif;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
    margin-left: -50%;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    height: 100vh;
    h1 {
      font-size: 1rem;
      text-align: center;
      margin-left: 0;
    }
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 75vh;
    h1 {
      font-size: 1.5rem;
    }
  }
`;


const FloatingStats = styled.div`
  position: absolute;
  top: 80%; /* Ajuste essa posição conforme necessário */
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  z-index: 10; /* Garante que as caixas estarão sobre as seções */
  width: 70%; /* Define a largura da caixa */

  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column; /* Muda para coluna no mobile */
    align-items: center;
    width: 10%; /* Ajusta a largura para caber melhor na tela menor */
    top: 73vh; /* Ajusta a posição para caber melhor na tela */
    transform: translate(-50%, -50%);
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Duas colunas no mobile */
  }
`;

const StatBox = styled.div`
  background-color: ${COLORS.box}; /* Cor cinza */
  padding: 3%;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* Garante que ocupe a largura total do contêiner */
  text-align: center;

  h2 {
    margin: 0;
    font-size: 2rem;
    color: ${COLORS.white};
  }

  p {
    margin: 5px 0 0;
    color: ${COLORS.white};
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 15px;
    width: 48%; /* Ocupa quase metade do espaço para dois itens por linha */
    min-width: 100px; /* Define uma largura mínima para manter uma boa aparência */
    h2 {
      font-size: 1.5rem; /* Reduz o tamanho da fonte no mobile */
    }
    p {
      font-size: 0.9rem; /* Reduz o tamanho da fonte no mobile */
    }
  }
`;

const StatsSection = styled.section`
  display: flex;
  flex-direction: row; /* Alinha a imagem e o texto lado a lado */
  align-items: center; /* Alinha verticalmente */
  justify-content: space-between; /* Mantém um espaço entre imagem e textos */
  background-color: ${COLORS.primary};
  padding: 40px;
  color: ${COLORS.white};
  height: auto;
  text-align: left;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column; /* Em telas menores, muda para layout vertical */
    text-align: center;
  }
`;

const SecondSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: ${COLORS.white};
  color: ${COLORS.primary};

  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column; /* Coloca a imagem no topo */
    align-items: center; /* Centraliza o conteúdo */
    text-align: center;
    padding: 20px;
  }

  p {
    color: ${COLORS.box};
  }
`;


const Text2 = styled.div`
  flex: 1;  /* O conteúdo do texto ocupa o espaço restante */
  z-index: 100;
  max-width: 40%;
  margin-left: 5.5rem;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: 400;
    color: ${COLORS.primary};
    
    span {
      font-weight: 700; /* Negrito apenas para o conteúdo dentro do span */
    }
  }

 p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: ${COLORS.box};
    font-weight: 500;
    max-width: 75%;
  }

   @media (max-width: ${BREAKPOINTS.mobile}) {
    max-width: 100%; /* Ocupa a largura total no mobile */
    margin: 0 auto; /* Centraliza o contêiner horizontalmente */
    text-align: center;

    h2 {
      font-size: 2rem;
      text-align: center; /* Centraliza o texto */
    }

    p {
      font-size: 1rem; /* Reduz o tamanho da fonte do parágrafo no mobile */
      text-align: center; /* Centraliza o texto */
      margin: 0 auto; /* Centraliza o parágrafo horizontalmente */
    }

     button {
      margin-top: 20px;
      display: inline-block;
      text-align: center;
      margin-bottom: 20px;
    }
    

  }
`;



const ImageContainer = styled.div`
  flex: 0 0 auto;  /* A imagem mantém seu tamanho original */
  max-width: 50%;  /* Limita a largura da imagem */
  display: flex;
  justify-content: flex-end;  /* Garante que a imagem fique à direita */
  margin-right: 3.5rem;

  img {
    max-width: 90%;
    height: auto;  /* A imagem é redimensionada proporcionalmente */
    border-radius: 10px;
  }
  
    @media (max-width: ${BREAKPOINTS.tablet}) {
    max-width: 100%; /* Aumenta a largura da imagem em telas menores */
    margin-bottom: 20px;
    justify-content: center; /* Centraliza a imagem */
    margin: 0 auto; /* Centraliza o próprio contêiner */
    order: -1;
  }
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o texto à esquerda */
  max-width: 55%; /* Limita a largura do texto para evitar que se expanda demais */

  @media (max-width: ${BREAKPOINTS.tablet}) {
    align-items: center; /* Alinha ao centro em telas pequenas */
    max-width: 100%;
  }

   h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: 400;
    color: ${COLORS.box};
    
    span {
      font-weight: 700; /* Negrito apenas para o conteúdo dentro do span */
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: ${COLORS.box};
    font-weight: 500;
    max-width: 75%;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Hand = styled.img`
  max-width: 40%; /* Define a largura da imagem */
  border-radius: 10%;
  margin-top: 5.5rem;
  margin-left: 4.5rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    max-width: 100%; /* Aumenta a largura da imagem em telas menores */
    margin-bottom: 20px;
  margin-left: 0rem;
  }
`;

const Predio = styled.img`
  flex: 0 0 auto;  /* A imagem mantém seu tamanho original */
  max-width: 40%;  /* Limita a largura da imagem */
  display: flex;
  justify-content: flex-end;  /* Garante que a imagem fique à direita */

  img {
    max-width: 100%;
    height: auto;  /* A imagem é redimensionada proporcionalmente */
    border-radius: 10px;
  }
`;

const AnimatedStatBox: React.FC<{ end: number; label: string }> = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <StatBox>
      <h2>+{count}</h2>
      <p>{label}</p>
    </StatBox>
  );
};

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeroSection>
        <h1>
          A melhor e mais completa <br /> plataforma de intermediação
          <br /> de negócios do Brasil
        </h1>
      </HeroSection>
      <FloatingStats>
        <AnimatedStatBox end={50} label="Parceiros em operação" />
        <AnimatedStatBox end={60} label="Consultores ativos" />
        <AnimatedStatBox end={300} label="Clientes atendidos" />
        <AnimatedStatBox end={50} label="Em negócios realizados" />
      </FloatingStats>
      
      <StatsSection>
        <Hand src={hand} alt="Acordo entre homens" />
        <TextContainer>
          <h2>Seja <span>Consultor<br/> de negócios</span></h2>
          <p>E tenha à sua disposição uma plataforma completa de gestão de clientes e o melhor, proporcione à sua rede de contatos diversas soluções.</p>
          <CustomButton />
        </TextContainer>
      </StatsSection>

      <SecondSection>
        <Text2>
        <h2>Seja <span>Parceiro<br/> de negócios</span></h2>
        <p>E utilize da força comercial do Originei para pulverizar a sua marca, a nível nacional, de forma estratégica e mapeada.</p>
        <CustomButton2 />
        </Text2>
        <ImageContainer>
          <img src={predio} alt="Imagem de um prédio em preto e branco" />
        </ImageContainer>
      </SecondSection>
    </Container>
  );
};

export default Home;
