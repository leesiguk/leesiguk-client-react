import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainCard from './MainCard';
import MainCardSkeleton from './MainCardSkeleton';
import { Game } from '../../containers/Main';
import { breakpoints } from '../../lib/styles/responsive';

const MainContentBlock = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${64 + 12}px 12px 12px 12px;
  display: flex;
  flex-wrap: wrap;
`;

const Cols = styled.div`
  padding: 12px;
  flex: 0 0 33.33333333%;
  max-width: 33.33333333%;

  @media (max-width: ${breakpoints.large}) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

interface MainContentProps {
  games: Game[];
  loading: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ games, loading }) => {
  useEffect(() => {
    FB.init({
      appId: '378770669689001',
      xfbml: true,
      version: 'v4.0'
    });
  }, [loading]);

  const cardList = games.map(game => (
    <Cols key={game.id}>
      <MainCard game={game}></MainCard>
    </Cols>
  ));

  const skeletonCardList = [...Array(6)].map((n, i) => (
    <Cols key={i}>
      <MainCardSkeleton />
    </Cols>
  ));

  return (
    <MainContentBlock>{loading ? skeletonCardList : cardList}</MainContentBlock>
  );
};

export default MainContent;
