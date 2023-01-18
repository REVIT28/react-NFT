import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { dark } from '../../styles/Themes';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import ConfettiCompose from '../Confetti';
// import img10 from '../../assets/Nfts/bighead-9.svg';
// import ETH from '../../assets/icons8-ethereum-48';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  display: flex;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 2rem auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  margin: 2rem 5rem;
  position: relative;
  color: white;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(4px);

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.15);
      transition: all 0.3s ease;
    }
  }
`;

const ImageContainer = styled.div`
  width: 14rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  display: flex;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  /* border-bottom: 2px solid gray; */
  display: flex;
`;

const MemberComponent = ({ img, name = ' ', position = ' ' }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <ConfettiCompose />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="skyblaze" position="Founder" />
        <MemberComponent img={img2} name="megnum" position="co-founder" />
        <MemberComponent img={img3} name="lazy kong" position="director" />
        <MemberComponent img={img4} name="black panther" position="manager" />
        <MemberComponent img={img5} name="deathstroke" position="artist" />
        <MemberComponent img={img6} name="cyber punk" position="social media manager" />
        <MemberComponent img={img7} name="monkey king" position="blockchain specialist" />
        <MemberComponent img={img8} name="monk" position="web3 deeveloper" />
        <MemberComponent img={img9} name="banana" position="graphic designer" />
      </Container>
    </Section>
  );
};

export default Team;
