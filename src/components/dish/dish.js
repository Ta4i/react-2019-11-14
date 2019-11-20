import React from 'react'
import {Button, Card, Typography, Divider} from 'antd'
import counterDecorator from '../../decorators/counter'
import './dish.css'

function Dish(props) {
  const {dish, amount, decrease, increase} = props

  const counterButtonStyle = {shape: 'circle', type: 'primary', ghost: 'ghost'}
  const counter = (
    <div className="dish-counter">
      <Button icon="minus" onClick={decrease} {...counterButtonStyle} />
      <Typography.Text>{amount}</Typography.Text>
      <Button icon="plus" onClick={increase} {...counterButtonStyle} />
    </div>
  )

  const ordersBlock = (
    <div className="dish-orders-block">
      <Typography.Text>{dish.price}</Typography.Text>
      <Divider type="vertical" className="dish-orders-block__divider" />
      {counter}
    </div>
  )

  const ingredients = (
    <ul className="dish-ingredients">
      {dish.ingredients.map((ingredient, id) => (
        <li key={id} className="dish-ingredients__item">
          {ingredient}
        </li>
      ))}
    </ul>
  )

  return (
    <Card>
      <Card.Grid hoverable={false} className="dish-card-grid--meta">
        <Card.Meta title={dish.name} description={ingredients} />
      </Card.Grid>
      <Card.Grid hoverable={false} className="dish-card-grid--orders-block">
        {ordersBlock}
      </Card.Grid>
    </Card>
  )
}

export default counterDecorator(Dish)
