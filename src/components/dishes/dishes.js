import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

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

Dishes.defaultProps = {
  menu: [],
}

Dishes.propTypes = {
  menu: PropTypes.array,
}

export default Dishes
