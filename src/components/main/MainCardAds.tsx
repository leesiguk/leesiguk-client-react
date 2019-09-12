import React from 'react';
import styled from 'styled-components';
import elevations from '../../lib/styles/elevations';

const MainCardAdsBlock = styled.div`
  ${elevations(10)};
  background-color: #ffffff;
  width: 100%;
  height: 539px;
  border-radius: 4px;
  overflow: hidden;
  a {
    img {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      margin: -1px;
    }
  }
`;

interface MainCardAdsProps {}

const MainCardAds: React.FC<MainCardAdsProps> = () => {
  return (
    <MainCardAdsBlock>
      <a
        href="https://coupa.ng/biBKO6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://ads-partners.coupang.com/banners/15159?subId=&traceId=19082520191687403001006442&w=600&h=900"
          alt="coupang ads"
        />
      </a>
    </MainCardAdsBlock>
  );
};

export default MainCardAds;
