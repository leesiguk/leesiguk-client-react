import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import { ellipsis } from '../../lib/styles/utils';
import { Game } from '../../containers/Main';

const MainCardHeaderBlock = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  display: flex;
  flex-direction: row;

  .title {
    color: ${props => props.theme.typography.color1};
    padding: 12px 16px;
    font-size: 20px;
    flex: 1;
    ${ellipsis};
  }
`;

interface MainCardHeaderProps {
  game: Game;
}

const MainCardHeader: React.FC<MainCardHeaderProps> = ({ game }) => {
  return (
    <MainCardHeaderBlock>
      <span className="title">{game.category}</span>
      <ShareButton game={game} />
    </MainCardHeaderBlock>
  );
};

export default MainCardHeader;
