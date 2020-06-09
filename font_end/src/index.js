import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import './bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <NotificationContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
