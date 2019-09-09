import React from 'react';
import styled from 'styled-components';
import elevations from '../../lib/styles/elevations';
import MainCardHeader from './MainCardHeader';
import {Game} from './MainContent';
import {breakpoints} from '../../lib/styles/responsive';

const MainCardBlock = styled.div`
  padding: 12px;
  flex: 0 0 33.33333333%;
      
  @media (max-width: ${breakpoints.large}) {
    flex: 0 0 50%;
  }
  
  @media (max-width: ${breakpoints.medium}) {
    padding: 0;
    flex: 0 0 100%;
  }
  
  
  .card-content {
    ${elevations(5)};
    background-color: #ffffff;
    width: 100%;
    height: 500px;
    border-radius: 4px;
  }
`;

interface MainCardProps {
  game: Game
}

const MainCard: React.FC<MainCardProps> = ({game}) => {
  return (
    <MainCardBlock>
      <div className="card-content">
        <MainCardHeader title={game.category}></MainCardHeader>
      </div>
    </MainCardBlock>
  );
};

export default MainCard;
