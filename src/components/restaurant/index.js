import React, {Component} from 'react'
import Dishes from '../dishes'
import Testimonials from '../testimonials'
import {Rate} from 'antd'
import './style.scss'

export default class Restaurant extends Component {
  render() {
    const {
      restaurant: {name, image, menu, reviews},
    } = this.props
    const raiting = reviews.length
      ? reviews.map(el => el.rating).reduce((acc, cur) => +cur + acc, 0) /
        reviews.length
      : 0

    return (
      <div className="restaurant">
        <div className="restaurant__info">
          <div className="restaurant__info-name">
            <h2>{name}</h2>
          </div>
          <div className="restaurant__info-label">
            <img src={image} />
          </div>
          <div className="restaurant__info-raiting">
            <Rate allowHalf defaultValue={raiting} disabled />
          </div>
        </div>
        <div className="restaurant__menu">
          <h3>Menu:</h3>
          <Dishes menu={menu} />
        </div>
        <div className="restaurant__tesimonials">
          <Testimonials testimonials={reviews} />
        </div>
      </div>
    )
  }
}
