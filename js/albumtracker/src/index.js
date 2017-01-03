import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import RequireAuth from './containers/RequireAuth';
import Albums from './containers/Albums';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/albums" component={RequireAuth(Albums)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
