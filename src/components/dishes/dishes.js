import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dish from '../dish'

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
      <div data-automation-id="DISHES">
        {menu.map((dish, i) => (
          <Dish key={dish.id} dish={dish} data-automation-id={`DISH_${i}`} />
        ))}
      </div>
    )
  }
}

Dishes.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ).isRequired,
}

export default Dishes
