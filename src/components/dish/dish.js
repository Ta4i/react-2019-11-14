import React from 'react'
import {Button, Typography} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props

  return (
    <div className="dish__item">
      <Typography.Title level={4} className="dish__item-heading">
        {dish.name}
      </Typography.Title>

      <div className="dish__item-price">Price: {dish.price} $</div>

      <div className="dish__item-amount">
        <div className="dish__item-amount-heading">Amount:</div>
        <div className="dish__item-amount-counter">
          <Button
            className="dish__item-amount-counter-btn"
            shape="circle"
            icon="minus"
            type={'primary'}
            onClick={decrease}
          />
          <span className="dish__item-amount-counter-text">{amount}</span>
          <Button
            className="dish__item-amount-counter-btn"
            shape="circle"
            icon="plus"
            type={'primary'}
            onClick={increase}
          />
        </div>
      </div>
    </div>
  )
}

export default counterDecorator(Dish)
