import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import point1 from '../../assets/point_01.png';
import point2 from '../../assets/point_02.png';
import point3 from '../../assets/point_03.png';
import point4 from '../../assets/point_04.png';
import Button from '../common/Button';
import palette from '../../lib/styles/pallete';

const AboutBlock = styled.div`
  background-color: #282d49;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .point {
    position: absolute;
    width: 35px;
    height: 35px;
    opacity: 0.2;
    margin: 20px;

    &.geon {
      top: 0;
      left: 0;
    }

    &.gon {
      top: 0;
      right: 0;
    }

    &.gam {
      bottom: 0;
      left: 0;
    }

    &.li {
      bottom: 0;
      right: 0;
    }
  }
`;

const HomeLink = styled(Link)`
  .logo {
    max-width: 100%;
    width: 800px;
  }
`;

const Footer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 0;
`;

const FooterButtonLink = styled.a`
  text-decoration: none;
  i {
    margin-right: 8px;

    &.heart {
      color: ${palette.red8};
    }
  }
`;

interface AboutProps {}

const MainCard: React.FC<AboutProps> = () => {
  return (
    <AboutBlock>
      <HomeLink to="/">
        <img src="/img/icons/social-810x810.png" alt="logo" className="logo" />
      </HomeLink>
      <img className="point geon" src={point1} alt="geon" />
      <img className="point gon" src={point2} alt="gon" />
      <img className="point gam" src={point3} alt="gam" />
      <img className="point li" src={point4} alt="li" />
      <Footer>
        <FooterButtonLink
          href="mailto:siguklee@gamil.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button link>
            <i className="material-icons">email</i>
            문의하기
          </Button>
        </FooterButtonLink>
        <FooterButtonLink
          href="https://github.com/leesiguk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button link>
            <i className="material-icons">code</i>
            Github
          </Button>
        </FooterButtonLink>
        <FooterButtonLink href="/privacy">
          <Button link>
            <i className="material-icons">policy</i>
            개인정보 처리방침
          </Button>
        </FooterButtonLink>
        <FooterButtonLink
          href="https://www.buymeacoffee.com/f7ue0MvSn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button link>
            <i className="material-icons heart">favorite</i>
            커피 한 잔 지원
          </Button>
        </FooterButtonLink>
      </Footer>
    </AboutBlock>
  );
};

export default MainCard;
