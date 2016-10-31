import React from 'react'
import { Link } from 'react-router'
import Logo from '../atoms/Logo'
import logo from '../logo.svg'
import MenuNavigation from '../molecules/MenuNavigation'

const Header = (props) => <div className='header'>
<Link to='/'><Logo logo={logo} /></Link>
<MenuNavigation />
</div>

export default Header
