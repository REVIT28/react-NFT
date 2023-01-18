import { getElementError } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const Navbar = styled.nav`
  margin: 0 auto;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
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

const Navigation = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <div className="w-screen ">
      <Navbar id="navbar" className=" flex justify-between items-center w-4/5 h-20 ">
        <Logo />
        <ul className=" flex justify-between items-center ">
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>

          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </ul>
        <Button text="Connect Wallet" link="https://google.com" />
      </Navbar>
    </div>
  );
};

export default Navigation;
