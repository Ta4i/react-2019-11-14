import React, {Component} from 'react'
import Dishes from '../dishes'

import {Typography} from 'antd'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props

    return (
      <div className="restaurant__item">
        <h2 className="restaurant__item-heading">
          Restaurant: {restaurant.name}
        </h2>

        <Typography.Title level={3}>Restaurant menu:</Typography.Title>
        <Dishes menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
