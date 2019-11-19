import React, {Component} from 'react'
import Dish from '../dish'

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
      <>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </>
    )
  }
}

export default Dishes
