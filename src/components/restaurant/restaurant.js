import React, {Component} from 'react'
import Dishes from '../dishes'
import Rating from '../rating'
import Reviews from '../reviews'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Rating restaurant={restaurant} />
        <Dishes menu={restaurant.menu} />
        <br />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }
}
export default Restaurant
