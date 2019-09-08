import React from 'react';
import styled from 'styled-components';

const CardBlock = styled.div`
  padding: 8px;
  
  .card-content {
    background-color: #ffffff;
    width: 300px;
    height: 500px;
  }
`;

const Card: React.FC = ({children}) => {
  return (
    <CardBlock>
      <div className="card-content">
        {children}
      </div>
    </CardBlock>
  );
};

export default Card;
