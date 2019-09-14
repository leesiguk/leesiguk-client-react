import { createStandardAction, createReducer } from 'typesafe-actions';

export const setDarkMode = createStandardAction('theme/SET_DARK_MODE')();
export const setLightMode = createStandardAction('theme/SET_LIGHT_MODE')();

type ThemeState = {
  darkMode: boolean;
};

const initialState: ThemeState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
};

const theme = createReducer(initialState)
  .handleAction(setDarkMode, state => {
    localStorage.setItem('darkMode', 'true');
    return { darkMode: true };
  })
  .handleAction(setLightMode, state => {
    localStorage.removeItem('darkMode');
    return { darkMode: false };
  });

export default theme;
