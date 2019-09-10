import React from 'react';
import styled from 'styled-components';
import {Brand} from './MainContent';
import Image from '../common/Image';
import palette from '../../lib/styles/pallete';

const MainCardBrandBlock = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const NationalFlagImage = styled.img`
  width: 40px;
  border: 1px solid #ededed;
  position: absolute;
  bottom: -16px;
  left: 20px;
`;

const BrandName = styled.div`
  padding-top: 24px;
  font-size: 18px;
  color: ${palette.gray8};
`;

const LikeCount = styled.div`
  padding-top: 4px;
  .like-icon {
    border-radius: 50%;
    font-size: 10px;
    background-color: ${palette.blue6};
    color: #ffffff;
    width: 14px;
    height: 14px;
    line-height: 14px;
    text-align: center;
  }
  
  .like-text {
    padding-left: 4px;
    font-size: 13px;
    color: ${palette.gray6};
  }
`;

const FacebookButtonWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding-top: 8px;
  text-align: center;
`;

interface MainCardBrandProps {
  brand: Brand,
  brandType: string
}

const MainCardBrand: React.FC<MainCardBrandProps> = (
  {
    brand,
    brandType,
  },
) => {
  const flagUrl = (brandType: string) => `/img/flag-${brandType === 'korea' ? 'kr' : 'jp'}.png`;
  const addComma = (number: number) => number.toLocaleString();

  return (
    <MainCardBrandBlock>
      <ImageWrapper>
        <Image src={brand.brandImageUrl}/>
        <NationalFlagImage src={flagUrl(brandType)} alt="national flag"/>
      </ImageWrapper>
      <BrandName>{brand.name}</BrandName>
      <LikeCount>
        <i className="material-icons like-icon">thumb_up</i>
        <span className="like-text">{addComma(brand.like)}</span>
      </LikeCount>
      <FacebookButtonWrapper>
        <div
          className="fb-like"
          data-href={brand.facebookPageUrl}
          data-width=""
          data-layout="button"
          data-action="like"
          data-size="large"
          data-show-faces="false"
          data-share="false"
        />
      </FacebookButtonWrapper>
    </MainCardBrandBlock>
  );
};

export default MainCardBrand;
