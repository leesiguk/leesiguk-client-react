import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactDOM.render(<App />, document.getElementById('root'));

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
