import React from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  display: flex;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.h1`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const RoadMap = () => {
  return (
    <Section id="roadmap">
      <Title>RoadMap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
      </Container>
    </Section>
  );
};

export default RoadMap;
