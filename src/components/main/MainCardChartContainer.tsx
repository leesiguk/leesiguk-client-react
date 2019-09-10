import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Game } from './MainContent';
import palette from '../../lib/styles/pallete';
import MainCardCurrentLikeChart from './MainCardCurrentLikeChart';

const MainCardChartContainerBlock = styled.div``;

const Header = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 16px;
  color: ${palette.gray8};
  flex: 1;
`;

const Gap = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

interface MainCardChartContainerProps {
  game: Game;
}

const MainCardChartContainer: React.FC<MainCardChartContainerProps> = ({
  game
}) => {
  const likeGap = Math.abs(game.japan.like - game.korea.like).toLocaleString();

  return (
    <MainCardChartContainerBlock>
      <Header>
        <Title>좋아요 수</Title>
        <Gap>차이 {likeGap}</Gap>
      </Header>
      {['japan', 'korea'].map((brandType: string | any) => (
        <Fragment key={brandType}>
          <MainCardCurrentLikeChart
            game={game}
            brandType={brandType}
          ></MainCardCurrentLikeChart>
        </Fragment>
      ))}
    </MainCardChartContainerBlock>
  );
};

export default MainCardChartContainer;
