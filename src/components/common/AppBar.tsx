import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const AppBarBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282D49;
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

const AppBar: React.FC = () => {
  return (
    <AppBarBlock>
      <img src={logo} alt="logo"/>
    </AppBarBlock>
  );
};

export default AppBar;
