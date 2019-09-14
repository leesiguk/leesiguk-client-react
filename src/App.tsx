import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import { ThemeProvider } from 'styled-components';
import light from './lib/styles/theme/light';
import dark from './lib/styles/theme/dark';
import { useSelector } from 'react-redux';
import { RootState } from './modules';

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/privacy" component={PrivacyPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
