import React from 'react'
import { Link } from 'react-router'

const Button = (props) => <button className='button' type='button'>
  <Link to={props.link}>
    {props.text}
  </Link>
</button>


export default Button
