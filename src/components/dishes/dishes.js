import React, {Component} from 'react'
import Dish from '../dish'

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

export default Dishes
