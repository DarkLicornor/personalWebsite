import React from 'react'
import { Link } from 'react-router'

const MenuCategory = (props) => <li className='menuCategory'>
  <Link to={props.link}>{props.text}</Link>
</li>

export default MenuCategory
