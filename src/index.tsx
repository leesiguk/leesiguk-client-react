import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

ReactGA.initialize('UA-146336888-1');
ReactGA.pageview(window.location.pathname + window.location.search);

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0] as any;
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s) as any;
  js.id = id;
  js.src = 'https://connect.facebook.net/ko_KR/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

serviceWorker.register();
