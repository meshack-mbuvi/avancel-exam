import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux setup
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, connect } from 'react-redux';
import rootReducer from './reducers';

// components
import App from './components';

// configure store
const store = createStore(rootReducer, composeWithDevTools());

const Root = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path='/' component={App} />
    </Switch>
  );
};

const mapStateFromProps = (state) => ({
  issues: state.issues,
});

const RootWithAuth = withRouter(connect(mapStateFromProps, null)(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
