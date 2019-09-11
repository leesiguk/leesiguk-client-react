import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/privacy" component={PrivacyPage} />
      </Switch>
    </Router>
  );
};

export default App;
