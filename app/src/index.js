import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Header from './Header';
import Click from './Click';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/about" component={Header}/>
      <Route path="/users" component={Click} />
    </Router>),
    document.getElementById('root')
);
