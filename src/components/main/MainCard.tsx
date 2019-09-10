import React from 'react';
import styled from 'styled-components';
import elevations from '../../lib/styles/elevations';
import MainCardHeader from './MainCardHeader';
import { Game } from '../../containers/Main';
import MainCardMainContent from './MainCardMainContent';
import MainCardChartContainer from './MainCardChartContainer';

const MainCardBlock = styled.div`
  ${elevations(5)};
  background-color: #ffffff;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

interface MainCardProps {
  game: Game;
}

const MainCard: React.FC<MainCardProps> = ({ game }) => {
  return (
    <MainCardBlock>
      <MainCardHeader title={game.category} />
      <MainCardMainContent game={game} />
      <MainCardChartContainer game={game} />
    </MainCardBlock>
  );
};

export default MainCard;
