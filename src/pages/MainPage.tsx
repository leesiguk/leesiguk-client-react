import React from 'react';
import styled from 'styled-components';
import AppBar from '../components/common/AppBar';
import Main from '../containers/Main';

const MainPageBlock = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;

const MainPage: React.FC = () => {
  return (
    <MainPageBlock>
      <AppBar/>
      <Main/>
    </MainPageBlock>
  );
};

export default MainPage;
