import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
      <div data-automation-id="DISHES_CONTAINER">
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} dataId={`DISH_KEY_${dish.id}`} />
        ))}
      </div>
    )
  }
}

Dishes.defaultProps = {
  menu: [],
}

Dishes.propTypes = {
  menu: PropTypes.array.isRequired,
}

export default Dishes
