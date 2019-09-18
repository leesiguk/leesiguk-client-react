import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../lib/styles/responsive';

type Position = 'left' | 'right';

const SideAdsBlock = styled.div<{ position: Position }>`
  position: fixed;
  top: 64px;
  padding: 16px;
  ${props =>
    props.position === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

export interface SideAdsProps {
  position: Position;
}

const SideAds: React.FC<SideAdsProps> = ({ position }) => {
  return (
    <SideAdsBlock position={position}>
      {position === 'left' ? (
        <ins
          className="kakao_ad_area"
          data-ad-unit="DAN-rh893plw6blk"
          data-ad-width="160"
          data-ad-height="600"
        />
      ) : (
        <ins
          className="kakao_ad_area"
          data-ad-unit="DAN-qxw4xmv3b0wy"
          data-ad-width="160"
          data-ad-height="600"
        />
      )}
    </SideAdsBlock>
  );
};

export default SideAds;
