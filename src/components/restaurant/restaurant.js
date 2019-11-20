import React, {Component} from 'react'
import Dishes from '../dishes'
import Reviews from '../reviews'
import Rating from '../rating'
import {Typography} from 'antd'
import './restaurant.css'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props

    return (
      <div className="restaurant__item">
        <Typography.Title level={1} className="restaurant__item-heading">
          <img
            className="restaurant__item-heading-img"
            src="logo192.png"
            alt="Logo"
          />
          {restaurant.name}
        </Typography.Title>

        <div className="restaurant__item-rating">
          <h6 className="restaurant__item-rating-heading">Rating</h6>
          <Rating reviews={restaurant.reviews} />
        </div>

        <div className="restaurant__item-dishes">
          <Typography.Title
            level={3}
            className="restaurant__item-dishes-heading"
          >
            Restaurant menu
          </Typography.Title>
          <Dishes menu={restaurant.menu} />
        </div>

        <div className="restaurant__item-reviews">
          <Typography.Title
            level={3}
            className="restaurant__item-reviews-heading"
          >
            Restaurant reviews
          </Typography.Title>
          <Reviews reviews={restaurant.reviews} />
        </div>
      </div>
    )
  }
}

export default Restaurant
