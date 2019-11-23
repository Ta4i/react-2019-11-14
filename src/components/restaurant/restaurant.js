import React, {Component} from 'react'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'

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
          <Reviews reviews={reviews} />
          <Dishes menu={menu} />
        </div>
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired, // Проверим наличие обязательного объекта в пропсах
} // Дети дальше пусть сами разбираются

export default Restaurant
