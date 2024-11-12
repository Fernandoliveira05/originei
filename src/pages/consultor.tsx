import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../constants/style";
import Header from "../components/Header";
import PontoLaranja from "../constants/assets/img/PontoLaranja.svg";
import PontoCinza from "../constants/assets/img/PontoCinza.svg";

const Container = styled.div`
  background-color: ${COLORS.background};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${COLORS.box};

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1.5rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20vh;
  text-align: left;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  width: 250px;
  padding: 10px;

  &.extra-spacing {
    margin-top: 40px; /* Espaço extra para blocos específicos */
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${COLORS.primary};
  margin-bottom: 10px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  list-style-type: disc;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza no eixo X */
  margin-top: 40px;
  margin-bottom: 60px;
`;


const CustomButton = styled.button`
  background-color: ${COLORS.box};
  color: ${COLORS.white};
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto; /* Centraliza no eixo X */

  &:hover {
    background-color: ${COLORS.primary};
  }
`;


const Page = () => {
  return (
    <Container>
      <Header backgroundColor="rgba(50, 57, 63, 1)" />
      <Title>SEJA CONSULTOR DE NEGÓCIOS</Title>
      <ContentSection>
        <Block>
          <TitleWithIcon>
            <Icon src={PontoLaranja} alt="Ponto Laranja" />
            Porque ser um Consultor
          </TitleWithIcon>
          <Text>
            Aqui na Originei o consultor poderá contar com diversas soluções
            financeiras e flexibilidade, pois terá à sua disposição uma ampla
            rede de Parceiros de Negócios e uma plataforma completa, com CRM
            robusto e profissionais especializados que irão atender e suportar a
            gestão das carteiras.
          </Text>
        </Block>

        <Block className="extra-spacing">
          <TitleWithIcon>
            <Icon src={PontoCinza} alt="Ponto Cinza" />
            Perfil do Consultor
          </TitleWithIcon>
          <Text>
            Profissionais que possuam relacionamento com decisores estratégicos
            em organizações, nossos especialistas vão apoiar o consultor a
            desenhar uma estratégia adequada para cada perfil de decisores.
          </Text>
        </Block>

        <Block>
          <TitleWithIcon>
            <Icon src={PontoLaranja} alt="Ponto Laranja" />
            Benefícios de ser Consultor
          </TitleWithIcon>
          <BulletList>
            <li>Desempenhar outras atividades ao mesmo tempo.</li>
            <li>O consultor decide o tempo a ser dedicado.</li>
            <li>Não tem obrigação de abrir um CNPJ.</li>
            <li>Manter ativa a rede de relacionamento.</li>
            <li>Se manter ativo, mesmo que desempregado ou aposentado.</li>
            <li>Novas fontes de renda.</li>
          </BulletList>
        </Block>

        <Block className="extra-spacing">
          <TitleWithIcon>
            <Icon src={PontoCinza} alt="Ponto Cinza" />
            Benefícios Originei
          </TitleWithIcon>
          <BulletList>
            <li>Apoio à gestão da carteira de clientes.</li>
            <li>Plataforma tecnológica com CRM robusto.</li>
            <li>Alavancagem e diversificação de receitas.</li>
            <li>Crosseling dos clientes indicados.</li>
            <li>Time de inteligência interna para construção dos casos e defesa dos clientes.</li>
            <li>Apoio de ponta a ponta em todas as indicações.</li>
          </BulletList>
        </Block>
      </ContentSection>

      <ButtonContainer>
        <CustomButton>Fale conosco ➔</CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default Page;
