import React from 'react';
import styled from 'styled-components';
import {Game} from './MainContent';
import MainCardBrand from './MainCardBrand';

const MainCardMainContentBlock = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: row;

  .vs {
      width: 40px;
      text-align: center;
      padding-top: 24px;
      font-size: 24px;
  }
`;

interface MainCardMainContentProps {
  game: Game
}

const MainCardMainContent: React.FC<MainCardMainContentProps> = ({game}) => {
  return (
    <MainCardMainContentBlock>
      <MainCardBrand brand={game.japan} brandType="japan"/>
      <div className="vs">VS</div>
      <MainCardBrand brand={game.korea} brandType="korea"/>
    </MainCardMainContentBlock>
  );
};

export default MainCardMainContent;
