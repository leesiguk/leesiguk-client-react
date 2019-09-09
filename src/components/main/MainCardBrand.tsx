import React from 'react';
import styled from 'styled-components';
import {Game} from './MainContent';

const MainCardBrandBlock = styled.div`

`;

interface MainCardBrandProps {
  game: Game
}

const MainCardBrand: React.FC<MainCardBrandProps> = ({game}) => {
  return (
    <MainCardBrandBlock>

    </MainCardBrandBlock>
  );
};

export default MainCardBrand;
