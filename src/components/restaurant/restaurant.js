import React, {Component} from 'react'
import Dishes from '../dishes'
import Rating from '../rating'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const reviews = restaurant.reviews

    const avarageRatingNumber = () => {
      const summ = reviews.reduce((acc, review) => {
        return acc + review.rating
      }, 0)
      const average = summ / reviews.length

      return average
    }

    return (
      <div>
        <h2>{restaurant.name}</h2>
        <Rating rating={avarageRatingNumber()} />
        <Dishes menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
