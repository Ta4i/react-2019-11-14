import React, {Component} from 'react'
import Dishes from '../dishes'
import Reviews from '../reviews'

import {Typography} from 'antd'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props

    return (
      <div className="restaurant__item">
        <Typography.Title level={1} className="restaurant__item-heading">
          <img
            className="restaurant__item-heading-img"
            src="logo192.png"
            alt=""
          />
          {restaurant.name}
        </Typography.Title>

        <div className="restaurant__item-menu">
          <Typography.Title level={3} className="restaurant__item-menu-heading">
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
