import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import {NavLink} from 'react-router-dom'

class RestaurantsNavigation extends Component {
  render() {
    const {restaurants} = this.props
    return (
      <div className={styles.list}>
        {restaurants.map(({id, name}) => (
          <NavLink
            className={styles.restaurant}
            key={id}
            data-automation-id={`RESTAURANT_NAVIGATION_${id}`}
            to={`/restaurant/${id}`}
            activeClassName={styles.activeLink}
          >
            {name}
          </NavLink>
        ))}
      </div>
    )
  }
}

export default RestaurantsNavigation
