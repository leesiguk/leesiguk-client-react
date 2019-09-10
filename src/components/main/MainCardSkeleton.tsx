import React from 'react';
import styled, { keyframes } from 'styled-components';
import elevations from '../../lib/styles/elevations';

const pulse = keyframes`
  0% {    
    background-color: rgba(0, 0, 0, 0.05)
  }
  50% {
    background-color: rgba(0, 0, 0, 0.15)
  }
  100% {
    background-color: rgba(0, 0, 0, 0.05)
  }
`;

const MainCardSkeletonBlock = styled.div`
  ${elevations(5)};
  background-color: #ffffff;
  width: 100%;
  height: 550px;
  border-radius: 4px;
  padding: 16px;
  position: relative;
`;

const Header = styled.div`
  border-radius: 4px;
  width: 50%;
  height: 32px;
  user-select: none;
  animation: ${pulse} 2s infinite ease-in-out;
`;
const ShareButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  user-select: none;
  animation: ${pulse} 2s infinite ease-in-out;
`;
const MainContent = styled.div`
  border-radius: 4px;
  margin: 32px 0;
  width: 100%;
  height: 210px;
  user-select: none;
  animation: ${pulse} 2s infinite ease-in-out;
`;
const LikeText = styled.div`
  border-radius: 4px;
  width: 100px;
  height: 20px;
  user-select: none;
  animation: ${pulse} 2s infinite ease-in-out;
`;
const BarChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  padding-bottom: 8px;
`;
const BarChartCircle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  user-select: none;
  animation: ${pulse} 2s infinite ease-in-out;
  margin-right: 16px;
`;
const BarChart = styled.div`
  flex: 1 0 auto;
  border-radius: 4px;
  height: 40px;
  user-select: none;
  animation: ${pulse} 2s infinite ease-in-out;
`;
const TrendChart = styled.div`
  height: 40px;
`;

interface MainCardSkeletonProps {}

const MainCard: React.FC<MainCardSkeletonProps> = () => {
  return (
    <MainCardSkeletonBlock>
      <Header />
      <ShareButton />
      <MainContent />
      <LikeText />
      <BarChartWrapper>
        <BarChartCircle />
        <BarChart />
      </BarChartWrapper>
      <TrendChart />
      <BarChartWrapper>
        <BarChartCircle />
        <BarChart />
      </BarChartWrapper>
      <TrendChart />
    </MainCardSkeletonBlock>
  );
};

export default MainCard;
