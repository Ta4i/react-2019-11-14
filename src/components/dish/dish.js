import React from 'react'
import {Button, Typography} from 'antd'
import counterDecorator from '../../decorators/counter'
import classes from './dash.module.css'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
    <div className={classes.Dash}>
      <div className={classes.Dash__data}>
        <div className={classes.Dash__info}>
          <div className={classes.Dash__title}>
            <Typography.Title level={4}>{dish.name}</Typography.Title>
          </div>
          <div className={classes.Dash__price}>
            <p className={classes.Dash__priceText}>
              price -
              <span className={classes.Dash__priceNumber}>
                <Typography.Text>{dish.price}</Typography.Text>
              </span>
            </p>
          </div>
        </div>
        <div className={classes.Dash__btnGroup}>
          <Button
            shape="circle"
            icon="minus"
            type={'primary'}
            onClick={decrease}
          />
          <p>{amount}</p>
          <Button
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
