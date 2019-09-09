import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import palette from '../../lib/styles/pallete';
import {ellipsis} from '../../lib/styles/utils';

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
  title: string;
}

const MainCardHeader: React.FC<MainCardHeaderProps> = ({title}) => {
  return (
    <MainCardHeaderBlock>
      <span className="title">{title}</span>
      <ShareButton/>
    </MainCardHeaderBlock>
  );
};

export default MainCardHeader;
