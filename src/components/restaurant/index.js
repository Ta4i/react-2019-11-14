import React, {Component} from 'react'
import Dishes from '../dishes'
import Testimonials from '../testimonials'

export default class Restaurant extends Component {
  render() {
    const {
      restaurant: {name, image, menu, reviews},
    } = this.props
    return (
      <div className="restaurant">
        <div className="restaurant__info">
          <div className="restaurant__info-name">{name}</div>
          <div className="restaurant__info-label">
            <img src={image} />
          </div>
        </div>
        <div className="restaurant__menu">
          <Dishes menu={menu} />
        </div>
        <div className="restaurant__tesimonials">
          <Testimonials testimonials={reviews} />
        </div>
      </div>
    )
  }
}
