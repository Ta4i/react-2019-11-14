import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

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
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Dishes
