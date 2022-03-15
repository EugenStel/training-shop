import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { App } from './components/app/App';
import { Provider } from 'react-redux'
import { store } from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
