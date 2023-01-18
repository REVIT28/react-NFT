import React from 'react';
import Banner from './Banner';
import styled from 'styled-components';
import Logo from './Logo';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import LinkedIn from '../Icons/LinkedIn';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  position: relative;
`;

const Container = styled.div`
  width: 75%;

  margin: 2rem auto;
  border-bottom: 1px solid ${(props) => props.theme.text};
  /* background-color: lightblue; */
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transform: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style-type: style none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="http://facebook.com" target="blank" rel="nooper">
              <Facebook />
            </a>
            <a href="http://instagram.com" target="blank" rel="nooper">
              <Instagram />
            </a>
            <a href="http://twitter.com" target="blank" rel="nooper">
              <Twitter />
            </a>
            <a href="http://linkedin.com" target="blank" rel="nooper">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>

          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>&copy; {new Date().getFullYear()} Weirdos Club. All right reserved.</span>
        <span>
          Made with &#10084; by Yevhen
          <a href="http://youtube.com/codebucks" target="blank"></a>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
