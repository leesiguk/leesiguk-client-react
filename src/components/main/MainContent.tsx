import React from 'react';
import styled from 'styled-components';
import MainCard from './MainCard';

const MainContentBlock = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${64 + 12}px 12px 12px 12px;
  display: flex;
  flex-wrap: wrap;
`;

export interface Brand {
  name: string,
  brandColor: string,
  brandImageUrl: string,
  facebookPageUrl: string,
  like: number,
  likeHistory: number[],
}

export interface Game {
  category: string,
  id: string,
  japan: Brand,
  korea: Brand,
}

interface MainContentProps {
  games: Game[]
}

const MainContent: React.FC<MainContentProps> = ({games}) => {
  const cardList = games.map(game => (
    <MainCard
      key={game.id}
      game={game}
    >
    </MainCard>
  ));

  return (
    <MainContentBlock>{cardList}</MainContentBlock>
  );
};

export default MainContent;
