import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import GenericLayout from './templates/GenericLayout'
import Home from './organisms/Home';
import About from './organisms/About';
import Skills from './organisms/Skills';
import Work from './organisms/Work';
import Contact from './organisms/Contact';
import './style/output.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={GenericLayout}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/skills" component={Skills} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>),
  document.getElementById('root')
);
