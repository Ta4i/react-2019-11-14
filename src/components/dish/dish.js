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

  const name = dish.name ? dish.name : 'Omlet' // Простая проверка входных данных, выдача дефолтных значений в случае чего
  const ingredients = dish.ingredients
    ? dish.ingredients
    : ['milk', 'egg', 'tomato'] // --- the same ---
  const price = dish.price ? dish.price : 999999 // --- the same ---

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title
            level={4}
            className={styles.title}
            data-automation-id="DISH_NAME"
          >
            {name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{price} $</div>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.array,
  }).isRequired,
}

export default counter(Dish)
