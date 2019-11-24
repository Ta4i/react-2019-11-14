import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dish from '../dish'

class Dishes extends Component {
  render() {
    const {menu} = this.props

    return (
      <div data-automation-id="DISHES">
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    )
  }
}

Dishes.propTypes = {
  menu: PropTypes.array.isRequired,
}

export default Dishes
