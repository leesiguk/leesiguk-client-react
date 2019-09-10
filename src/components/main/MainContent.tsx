import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainCard from './MainCard';
import { Game } from '../../containers/Main';

const MainContentBlock = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${64 + 12}px 12px 12px 12px;
  display: flex;
  flex-wrap: wrap;
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
  }, []);

  return (
    <MainContentBlock>
      {games.map(game => (
        <MainCard key={game.id} game={game}></MainCard>
      ))}
    </MainContentBlock>
  );
};

export default MainContent;
