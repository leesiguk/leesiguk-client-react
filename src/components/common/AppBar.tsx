import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/pallete';

const AppBarBlock = styled.div`
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
  return (
    <AppBarBlock>
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
