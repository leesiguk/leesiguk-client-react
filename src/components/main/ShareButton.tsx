import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/pallete';

const ShareButtonBlock = styled.div`
  padding: 4px 12px;
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
  transition: background-color .3s;
  
  &:hover,
  &:focus {
    background-color: ${palette.gray2}
  }
`;

const ShareButton = () => {
  return (
    <ShareButtonBlock>
      <ToggleButton>
        <i className="material-icons-outlined">share</i>
      </ToggleButton>
      <div>

      </div>
    </ShareButtonBlock>
  );
};

export default ShareButton;
