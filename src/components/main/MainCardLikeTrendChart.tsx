import React from 'react';
import styled from 'styled-components';
import { Game } from '../../containers/Main';
import Chart from 'react-apexcharts';

const MainCardLikeTrendChartBlock = styled.div`
  width: 100%;
  height: 40px;
  overflow: hidden;
`;

interface MainCardLikeTrendChartProps {
  brandType: 'japan' | 'korea';
  game: Game;
}

const MainCardLikeTrendChart: React.FC<MainCardLikeTrendChartProps> = ({
  brandType,
  game
}) => {
  const brand = game[brandType];
  const series: any = [
    {
      name: brand.name,
      data: brand.likeHistory
    }
  ];
  const chartOptions: any = {
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    },
    colors: [brandType === 'korea' ? '#0072ff' : '#FF3838'],
    chart: {
      animations: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    }
  };
  return (
    <MainCardLikeTrendChartBlock>
      <Chart
        options={chartOptions}
        series={series}
        type="area"
        width="100%"
        height={40}
      />
    </MainCardLikeTrendChartBlock>
  );
};

export default MainCardLikeTrendChart;
