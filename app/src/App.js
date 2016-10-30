import React from 'react';
import Header from './Header.js';
import SubHeader from './SubHeader.js';
import logo from './logo.svg';
import './App.css';

const App = (props) => <div className="App">
  <Header logo={logo}/>
  <SubHeader />
</div>

export default App;
