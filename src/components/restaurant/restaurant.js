import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {Col, Row} from 'antd'
import Cart from '../cart'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error})
  }

  render() {
    const {
      restaurant: {id, name, menu, reviews},
    } = this.props
    return (
      <div>
        <Hero heading={name}>
          {/*{this.state.error ? null : <AverageRating reviews={reviews} />}*/}
        </Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <Reviews reviews={reviews} id={id} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }),
}

export default Restaurant
