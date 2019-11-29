import React from 'react'
import PropTypes from 'prop-types'
import {Card, Typography, Button, Row, Col} from 'antd'
import styles from './dish.module.css'
import {addToCart, removeFromCart} from '../../store/action-creators'
import {connect} from 'react-redux'

function Dish(props) {
  const {
    dish,

    // from store
    amount,
    increase,
    decrease,
  } = props

  return (
    <Card data-automation-id="DISH" className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title
            level={4}
            className={styles.title}
            data-automation-id="DISH_NAME"
          >
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-automation-id="AMOUNT">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon="minus"
                onClick={() => decrease(dish.id)}
                data-automation-id="DECREASE"
              />
              <Button
                className={styles.button}
                icon="plus"
                onClick={() => increase(dish.id)}
                data-automation-id="INCREASE"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export const DishPropTypes = {
  id: PropTypes.string,
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
}

Dish.propTypes = DishPropTypes

const mapsStateToProps = (state, ownProps) => ({
  amount: state.cart[ownProps.id] || 0,
  dish: state.dishes[ownProps.id],
})

const mapDispatchToProps = {
  increase: addToCart,
  decrease: removeFromCart,
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Dish)
