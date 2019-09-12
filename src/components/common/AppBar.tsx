import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/pallete';
import elevations from '../../lib/styles/elevations';

const AppBarBlock = styled.div<{ scrollY: number }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282d49;
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  z-index: 10;
  transition: box-shadow 0.3s;

  ${props =>
    props.scrollY > 0 &&
    css`
      ${elevations(5)}
    `}

  img {
    width: 160px;
    display: block;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const MainLink = styled(Link)`
  text-decoration: none;
`;

const AboutLink = styled(Link)`
  text-decoration: none;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  color: ${palette.red8};

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.26);
  }
`;

const AppBar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <AppBarBlock scrollY={scrollY}>
      <MainLink to="/">
        <img src={logo} alt="logo" />
      </MainLink>
      <Spacer />
      <AboutLink to="/about">
        <i className="material-icons">favorite</i>
      </AboutLink>
    </AppBarBlock>
  );
};

export default AppBar;
