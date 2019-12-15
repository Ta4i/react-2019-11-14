import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from '../../restaurants-navigation/restaurants-navigation.module.css'

function MenuItem({id, children}) {
  return (
    <NavLink
      className={styles.restaurant}
      key={id}
      data-automation-id={`RESTAURANT_NAVIGATION_${id}`}
      to={`/restaurant/${id}`}
      activeClassName={styles.activeLink}
    >
      {children}
    </NavLink>
  )
}

export default MenuItem
