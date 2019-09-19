import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NotFoundPageBlock = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    max-width: 100%;
    width: 400px;
  }
`;

const Title = styled.h1`
  margin-top: 48px;
  font-size: 24px;
  color: #ffffff;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageBlock>
      <Helmet>
        <title>404 Error - 이시국닷컴</title>
      </Helmet>
      <img src={logo} alt="logo" className="logo" />
      <Title>Page not found</Title>
    </NotFoundPageBlock>
  );
};

export default NotFoundPage;
