import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card';

const MainContentBlock = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 16px;
  display: flex;
  flex-direction: row;
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
    <Card key={game.id}>
      card Content
    </Card>
  ));

  return (
    <MainContentBlock>{cardList}</MainContentBlock>
  );
};

export default MainContent;
