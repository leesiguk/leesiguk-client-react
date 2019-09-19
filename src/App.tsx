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
import ScrollToTop from './components/common/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/privacy" component={PrivacyPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
