import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews, {ReviewsPropTypes} from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {DishesPropTypes} from '../dishes/dishes'
import Order from '../order'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error})
  }

  render() {
    const {
      restaurant: {name, menu, reviews},
    } = this.props
    return (
      <div>
        <Hero heading={name}>
          {this.state.error ? null : <AverageRating reviews={reviews} />}
        </Hero>
        <div className={styles.restaurantContent}>
          <Dishes menu={menu} />
          <Order />
          <br />
          <Reviews reviews={reviews} />
        </div>
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    menu: DishesPropTypes.menu,
    reviews: ReviewsPropTypes.reviews,
  }),
}

export default Restaurant
