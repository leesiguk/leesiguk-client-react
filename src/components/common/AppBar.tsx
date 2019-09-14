import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/pallete';
import elevations from '../../lib/styles/elevations';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { setDarkMode, setLightMode } from '../../modules/theme';

const AppBarBlock = styled.div<{ scrollY: number }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282d49;
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  z-index: 10;
  transition: box-shadow 0.3s;

  ${props =>
    props.scrollY > 0 &&
    css`
      ${elevations(5)}
    `}

  img {
    width: 160px;
    display: block;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const MainLink = styled(Link)`
  text-decoration: none;
`;

const iconButtonStyles = css`
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
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.26);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.46);
  }
`;

const AboutLink = styled(Link)`
  ${iconButtonStyles};
  text-decoration: none;
  color: ${palette.red6};
`;

const ToggleThemeButton = styled.button<{ darkMode: boolean }>`
  ${iconButtonStyles};
  margin-right: 8px;
  ${props =>
    props.darkMode
      ? css`
          color: white;
        `
      : css`
          color: yellow;
        `};
`;

const AppBar: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [scrollY, setScrollY] = useState(0);
  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  const toggleTheme = () => {
    darkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <AppBarBlock scrollY={scrollY}>
      <MainLink to="/">
        <img src={logo} alt="logo" />
      </MainLink>
      <Spacer />
      <ToggleThemeButton darkMode={darkMode} onClick={toggleTheme}>
        <i className="material-icons">
          {darkMode ? 'wb_sunny' : 'brightness_3'}
        </i>
      </ToggleThemeButton>
      <AboutLink to="/about">
        <i className="material-icons">favorite</i>
      </AboutLink>
    </AppBarBlock>
  );
};

export default AppBar;
