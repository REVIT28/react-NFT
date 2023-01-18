import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useRef } from 'react';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';
// import ConfettiCompose from '../Confetti';
import ETH from '../../assets/icons8-ethereum-48.png';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const move = keyframes`
 
  0% { transform: translateX(100%)};
100% { transform: translateX(-100%)}
 
`;

const Row = styled.div`
  background-color: ${(props) => props.theme.text};
  display: flex;
  white-space: nowrap;
  box-sizing: context-box;
  margin: 2rem 0;
  color: ${(props) => props.theme.body};
  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid gray;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    color: gray;
    font-weight: 600;
  }

  h1 {
    font-size: 16px;
    margin: 4px 0;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 16px;
  }

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div className="">
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>
        <div className="">
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const ShowCase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img2} number={123} price={1.2} passRef={Row1Ref} />
        <NftItem img={img3} number={456} price={2.5} passRef={Row1Ref} />
        <NftItem img={img4} number={666} price={3.5} passRef={Row1Ref} />
        <NftItem img={img5} number={452} price={4.7} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} number={888} price={3.2} passRef={Row2Ref} />
        <NftItem img={img7} number={211} price={1.6} passRef={Row2Ref} />
        <NftItem img={img8} number={455} price={2.4} passRef={Row2Ref} />
        <NftItem img={img9} number={456} price={5.1} passRef={Row2Ref} />
        <NftItem img={img10} number={865} price={3.7} passRef={Row2Ref} />
      </Row>
    </Section>
  );
};

export default ShowCase;
