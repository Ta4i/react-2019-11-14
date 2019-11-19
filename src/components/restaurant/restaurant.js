import React, {Component} from 'react'
import Dishes from '../dishes'
import Rating from '../rating'
import Reviews from '../reviews'
import {Typography, Row} from 'antd'

const {Title} = Typography

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
      <div className="restaurant">
        <Row
          type="flex"
          justify="center"
          align="center"
          className="restaurant__title"
        >
          <Title>{restaurant.name}</Title>
          <Rating
            className="restaurant__rating"
            rating={avarageRatingNumber()}
          />
        </Row>
        <Dishes menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }
}

export default Restaurant
