import React, {Component} from 'react'
import Dish, {DishPropTypes} from '../dish'
import PropTypes from 'prop-types'

class Dishes extends Component {
  render() {
    const {menu, restaurantId} = this.props
    return (
      <div>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} restaurantId={restaurantId} />
        ))}
      </div>
    )
  }
}

export const DishesPropTypes = {
  menu: PropTypes.arrayOf(DishPropTypes.dish),
}

Dishes.propTypes = DishesPropTypes

export default Dishes
