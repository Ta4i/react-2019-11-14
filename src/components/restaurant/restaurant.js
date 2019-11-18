import React, {Component} from 'react'
import Dishes from '../dishes'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <h2>{restaurant.name}</h2>
        <Dishes menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
