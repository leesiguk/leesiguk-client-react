import React from 'react';
import styled from 'styled-components';
import AppBar from '../components/common/AppBar';
import Main from '../containers/Main';
import { Helmet } from 'react-helmet';

const MainPageBlock = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
`;

const MainPage: React.FC = () => {
  return (
    <MainPageBlock>
      <Helmet>
        <title>이시국닷컴</title>
        <meta
          name="description"
          content="이시국엔 이시국닷컴! 이시국닷컴에서 다양한 한일 브랜드의 트랜드를 비교 해보세요."
        />
        <meta
          name="og:description"
          content="이시국엔 이시국닷컴! 이시국닷컴에서 다양한 한일 브랜드의 트랜드를 비교 해보세요."
        />
        <meta name="og:title" content="이시국닷컴" />
        <meta name="og:url" content="https://www.leesiguk.com" />
      </Helmet>
      <AppBar />
      <Main />
    </MainPageBlock>
  );
};

export default MainPage;
