import React from 'react'
import {Card, Typography, Button, Row, Col} from 'antd'
import PropTypes from 'prop-types'
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
    <Card className={styles.productDetailedOrderCard} data-automation-id="DISH">
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
          <div data-automation-id="DISH_PRICE" className={styles.price}>
            {dish.price} $
          </div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-automation-id="DISH_AMOUNT">
              {amount}
            </div>
            <Button.Group>
              <Button
                data-automation-id="DISH_AMOUNT_DECREASE"
                className={styles.button}
                icon="minus"
                onClick={() => decrease(dish.id)}
              />
              <Button
                data-automation-id="DISH_AMOUNT_INCREASE"
                className={styles.button}
                icon="plus"
                onClick={() => increase(dish.id)}
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

Dish.propTypes = {
  amount: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default counter(Dish)
