import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './restaurants-navigation.module.css'

class RestaurantsNavigation extends Component {
  render() {
    const {restaurants, onRestaurantChange} = this.props
    return (
      <div className={styles.list}>
        {restaurants.map(({id, name}) => (
          <span
            className={styles.restaurant}
            key={id}
            onClick={() => onRestaurantChange(id)}
            data-automation-id={`RESTAURANT_NAVIGATION_${id}`}
          >
            {name}
          </span>
        ))}
      </div>
    )
  }
}

RestaurantsNavigation.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onRestaurantChange: PropTypes.func.isRequired,
}

export default RestaurantsNavigation
