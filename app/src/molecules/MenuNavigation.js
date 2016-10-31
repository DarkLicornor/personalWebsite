import React from 'react'
import MenuCategory from '../atoms/MenuCategory'

const MenuNavigation = (props) => <ul className='menuNavigation'>
  <MenuCategory link={'/'} text={'Home'} />
  <p className='menuNavigation__separator'>/</p>
  <MenuCategory link={'/about'} text={'About'} />
  <p className='menuNavigation__separator'>/</p>
  <MenuCategory link={'/skills'} text={'Skills'} />
  <p className='menuNavigation__separator'>/</p>
  <MenuCategory link={'/contact'} text={'Contact'} />
</ul>

export default MenuNavigation
