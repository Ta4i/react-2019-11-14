import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

class Dishes extends Component {
  render() {
    const {menu, id} = this.props
    return (
      <div data-automation-id={`DISHES_${id}`}>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    )
  }
}

Dishes.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired
    ).isRequired,
  }),
}

export default Dishes
