import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';

import Button from './Button';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
`;

const JoiNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 2.5rem;
  border-radius: 50px;
  cursor: poimter;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid white;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  /* &:hover::after {
    transform: translate(-50%, -50%) scale(1.2);
    padding: 0.3rem;
  } */
`;

const Section = styled.section`
  height: 25rem;
  width: 100vw;
  position: relative;
  background-color: ${(props) => `rgba(${props.theme.textRgba} 0.9)`};
  display: flex;

  justify-content: center;
  align-items: center;

  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }
`;

const BtnContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  width: 35%;
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="The Weirdos" />
        <img src={img2} alt="The Weirdos" />
        <img src={img3} alt="The Weirdos" />
        <img src={img4} alt="The Weirdos" />
        <img src={img5} alt="The Weirdos" />
        <img src={img6} alt="The Weirdos" />
      </ImgContainer>
      <Title>
        Join the <br /> weirdos club
      </Title>
      <BtnContainer>
        <JoiNow>
          {/* <Button text="join now" link="#" /> */}
          Join now
        </JoiNow>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
