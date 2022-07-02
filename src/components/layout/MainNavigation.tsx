import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'


const MainNavigation = () => {
  return (
    <header className={classes.header} >
      <nav>
        <ul>
          <li>
            <NavLink className={(navdata) => navdata.isActive ? classes['navlink-active'] : '' } to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={(navdata) => navdata.isActive ? classes['navlink-active'] : '' } to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className={(navdata) => navdata.isActive ? classes['navlink-active'] : '' } to='/contact-us'>Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation