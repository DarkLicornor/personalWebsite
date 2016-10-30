import React from 'react'
import { Link } from 'react-router'

const Header = (props) => <div className="App-header">
  <img src={props.logo} className="App-logo" alt="logo" />
  <h2>Welcome to React</h2>
  <li>
    <Link to={'/users'}>Click me !</Link>
  </li>
</div>

export default Header
