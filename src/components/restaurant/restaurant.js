import React, {Component} from 'react'
import Dishes from '../dishes'
import Rating from '../rating'
import Review from '../review'

import {Layout, Row, Col, Button} from 'antd'

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
        <Row type="flex">
          <h1>{restaurant.name}</h1>
          <Rating rating={avarageRatingNumber()} />
        </Row>
        <Dishes menu={restaurant.menu} />
        <b>Reviews:</b>
        <Review />
      </div>
    )
  }
}

export default Restaurant
