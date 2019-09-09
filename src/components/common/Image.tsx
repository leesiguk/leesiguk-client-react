import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/pallete';

const ImageBlock = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${palette.gray2};
  border: 1px solid ${palette.gray1};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

interface ImageProps {
  size?: number,
  src: string
}

const Image: React.FC<ImageProps> = (
  {
    size = 80,
    src,
  },
) => {
  return (
    <ImageBlock size={size}>
      <Img src={src} alt="logo"/>
    </ImageBlock>
  );
};

export default Image;
