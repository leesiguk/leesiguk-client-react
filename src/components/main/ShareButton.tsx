import React, { useState } from 'react';
import styled from 'styled-components';
import Share from './Share';
import { Game } from '../../containers/Main';
import { CSSTransition } from 'react-transition-group';

const ShareButtonBlock = styled.div`
  padding: 4px 12px;
  position: relative;
`;

const ToggleButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  i {
    color: ${props => props.theme.typography.color3};
  }
`;

interface ShareButtonProps {
  game: Game;
}
const ShareButton: React.FC<ShareButtonProps> = ({ game }) => {
  const [show, setShow] = useState(false);

  return (
    <ShareButtonBlock>
      <CSSTransition in={show} timeout={200} classNames="slide" unmountOnExit>
        <Share game={game} />
      </CSSTransition>
      <ToggleButton onClick={() => setShow(!show)}>
        {show ? (
          <i className="material-icons-outlined">chevron_right</i>
        ) : (
          <i className="material-icons-outlined">share</i>
        )}
      </ToggleButton>
    </ShareButtonBlock>
  );
};

export default ShareButton;
