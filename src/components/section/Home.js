import React from 'react';
import styled, { keyframes } from 'styled-components';

import CoverVideo from '../CoverVideo';
import TypeWriterText from '../TypeWriterText';
import RoundTextBlack from '../../assets/Rounded-Text-Black.png';

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight}px)`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const rotate = keyframes`
100%{
  transform: rotate(1turn)
}`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1rem;
    /* width: 100%;
    flex-direction: column-reverse;
    margin: 0 auto;
    align-items: center;
    justify-content: center; */
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: white;
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const style_two = 'w-2/4 h-full flex flex-col justify-center items-center';

const Home = () => {
  return (
    <Section id="navbar">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
      </Container>

      <Round>
        <Circle>&#x2193;</Circle>
        <img src={RoundTextBlack} alt="NFT" />
      </Round>
    </Section>
  );
};

export default Home;
