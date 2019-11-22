import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dish from '../dish'

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
      <div>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    )
  }
}

Dishes.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ingredients: PropTypes.array,
    })
  ).isRequired,
}

export default Dishes
