import React from 'react'
import PropTypes from 'prop-types'
import {Card, Typography, Button, Row, Col} from 'antd'
import styles from './dish.module.css'
import counter from '../../decorators/counter'

function Dish(props) {
  const {
    dish,

    // from decorator
    amount,
    increase,
    decrease,
  } = props

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title
            level={4}
            className={styles.title}
            data-automation-id="DISH_NAME"
          >
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph
            className={styles.description}
            data-automation-id="DISH_INGREDIENTS"
          >
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price} data-automation-id="DISH_PRICE">
            {dish.price} $
          </div>
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

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  amount: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default counter(Dish)
