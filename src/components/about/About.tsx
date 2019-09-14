import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import point1 from '../../assets/point_01.png';
import point2 from '../../assets/point_02.png';
import point3 from '../../assets/point_03.png';
import point4 from '../../assets/point_04.png';
import Button from '../common/Button';
import palette from '../../lib/styles/pallete';
import { breakpoints } from '../../lib/styles/responsive';

const AboutBlock = styled.div`
  background-color: #282d49;
`;

const MainContent = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .logo {
    max-width: 100%;
    width: 800px;
  }

  .point {
    position: fixed;
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

const ArrowDown = styled.div<{ scrollY: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    i {
      color: rgba(255, 255, 255, 0.76);
    }
  }

  i {
    font-size: 48px;
    transition: opacity 0.3s, color 0.3s;
    color: rgba(255, 255, 255, 0.26);
    animation-name: bounce;
    animation-duration: 2.5s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    ${props =>
      props.scrollY > 0 &&
      css`
        opacity: 0;
      `}
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-7px);
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  i {
    margin-right: 8px;

    &.heart {
      color: ${palette.red6};
    }
  }
`;

const ButtonRouterLink = styled(Link)`
  text-decoration: none;
  i {
    margin-right: 8px;
  }
`;

interface AboutProps {}

const MainCard: React.FC<AboutProps> = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.body.scrollHeight,
    });
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AboutBlock>
      <MainContent>
        <img src="/img/icons/social-810x810.png" alt="logo" className="logo" />
        <img className="point geon" src={point1} alt="geon" />
        <img className="point gon" src={point2} alt="gon" />
        <img className="point gam" src={point3} alt="gam" />
        <img className="point li" src={point4} alt="li" />
      </MainContent>
      <ArrowDown scrollY={scrollY} onClick={scrollToBottom}>
        <i className="material-icons">keyboard_arrow_down</i>
      </ArrowDown>
      <Menu>
        <ButtonRouterLink to="/">
          <Button link>
            <i className="material-icons">home</i>
            메인화면
          </Button>
        </ButtonRouterLink>
        <ButtonLink
          href="mailto:siguklee@gamil.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button link>
            <i className="material-icons">email</i>
            문의하기
          </Button>
        </ButtonLink>
        <ButtonLink
          href="https://github.com/leesiguk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button link>
            <i className="material-icons">code</i>
            Github
          </Button>
        </ButtonLink>
        <ButtonRouterLink to="/privacy">
          <Button link>
            <i className="material-icons">policy</i>
            개인정보 처리방침
          </Button>
        </ButtonRouterLink>
        <ButtonLink
          href="https://www.buymeacoffee.com/f7ue0MvSn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button link>
            <i className="material-icons heart">favorite</i>
            후원
          </Button>
        </ButtonLink>
      </Menu>
    </AboutBlock>
  );
};

export default MainCard;
