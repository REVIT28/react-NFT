import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  font-weight: 600;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }

  @media (max-width: 48em) {
    width: 100%;
    align-self: center;
    text-align: center;
  }
  @media (max-width: 70em) {
    font-size: 28px;
  }
`;

const SubTite = styled.h3`
  text-transform: capitalize;
  font-size: 25px;
  align-self: flex-start;
  margin-bottom: 1rem;
  width: 80%;
  color: gray;
  font-weight: 600;

  @media (max-width: 40em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    width: 100%;
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-blue-600">NFTs.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-orange-600">Collectible Items</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-red-600">Ape Killers!</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTite>Bored Of Apes? Try Something New</SubTite>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
