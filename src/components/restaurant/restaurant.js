import React, {Component} from 'react'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'

class Restaurant extends Component {
  render() {
    const {
      restaurant: {name, menu, reviews},
    } = this.props
    return (
      <div>
        <h2>{name}</h2>
        <AverageRating reviews={reviews} />
        <Reviews reviews={reviews} />
        <Dishes menu={menu} />
      </div>
    )
  }
}

export default Restaurant
