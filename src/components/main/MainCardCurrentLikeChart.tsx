import React from 'react';
import styled, { css } from 'styled-components';
import Image from '../common/Image';
import { Game } from '../../containers/Main';

const MainCardCurrentLikeChartBlock = styled.div<{
  brandType: 'japan' | 'korea';
}>`
  ${props =>
    props.brandType === 'korea'
      ? css`
          padding-top: 16px;
        `
      : ''}
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;

  .brand-logo-wrapper {
    padding: 0 16px;
  }
`;

const ChartWrapper = styled.div`
  flex: 1 0 auto;
  margin-right: 16px;
  background-color: #dddddd;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ChartBar = styled.div<{ brandType: 'japan' | 'korea' }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 40px;
  line-height: 40px;
  text-align: right;
  will-change: width;
  transition: width 1s;

  ${props =>
    props.brandType === 'korea'
      ? css`
          background: linear-gradient(to right, #00c6ff, #0072ff);
        `
      : css`
          background: linear-gradient(to right, #f89999, #ff3838);
        `}

  .like-text {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    margin: 0 12px;
  }
`;

interface MainCardCurrentLikeChartProps {
  game: Game;
  brandType: 'japan' | 'korea';
}

const MainCardCurrentLikeChart: React.FC<MainCardCurrentLikeChartProps> = ({
  game,
  brandType
}) => {
  const brand = game[brandType];
  const getWidth = (brandType: 'japan' | 'korea') => {
    const width: { japan: string; korea: string } = {
      japan: '',
      korea: ''
    };

    if (game.japan.like > game.korea.like) {
      width.japan = '100%';
      width.korea = `${(game.korea.like / game.japan.like) * 100}%`;
    } else {
      width.japan = `${(game.japan.like / game.korea.like) * 100}%`;
      width.korea = '100%';
    }

    return {
      width: width[brandType]
    };
  };

  return (
    <MainCardCurrentLikeChartBlock brandType={brandType}>
      <ChartContainer>
        <div className="brand-logo-wrapper">
          <Image src={brand.brandImageUrl} size={40}></Image>
        </div>
        <ChartWrapper>
          <ChartBar brandType={brandType} style={getWidth(brandType)}>
            <span className="like-text">{brand.like.toLocaleString()}</span>
          </ChartBar>
        </ChartWrapper>
      </ChartContainer>
    </MainCardCurrentLikeChartBlock>
  );
};

export default MainCardCurrentLikeChart;
