import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../lib/styles/responsive';

const BottomAdsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 8px;

  .mobile {
    display: none;
  }

  @media (max-width: ${breakpoints.medium}) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;

export interface BottomAdsProps {}

const BottomAds: React.FC<BottomAdsProps> = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//t1.daumcdn.net/adfit/static/ad.min.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <BottomAdsBlock>
      <div className="mobile">
        <ins
          className="kakao_ad_area"
          data-ad-unit="DAN-t4nx2o06c3lc"
          data-ad-width="320"
          data-ad-height="100"
        />
      </div>
      <div className="desktop">
        <ins
          className="kakao_ad_area"
          data-ad-unit="DAN-1jefxtbvblqgk"
          data-ad-width="728"
          data-ad-height="90"
        />
      </div>
    </BottomAdsBlock>
  );
};

export default BottomAds;
