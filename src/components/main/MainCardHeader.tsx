import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import palette from '../../lib/styles/pallete';
import { ellipsis } from '../../lib/styles/utils';
import { Game } from '../../containers/Main';

const MainCardHeaderBlock = styled.div`
  border-bottom: 1px solid ${palette.gray3};
  display: flex;
  flex-direction: row;

  .title {
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
