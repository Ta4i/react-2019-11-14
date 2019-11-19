import React from 'react'
import {Button, Card, Typography, Divider} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props

  const counter = (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto minmax(1.5em, auto) auto',
        gridGap: '.5em',
        alignItems: 'center',
        justifyContent: 'left',
        justifyItems: 'center',
      }}
    >
      <Button
        shape="circle"
        icon="minus"
        type={'primary'}
        onClick={decrease}
        className="amountButton"
      />
      <Typography.Text>{amount}</Typography.Text>
      <Button
        shape="circle"
        icon="plus"
        type={'primary'}
        onClick={increase}
        className="amountButton"
      />
    </div>
  )

  return (
    <Card
      className="card"
      title={
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto auto',
            gridGap: '1em',
            alignItems: 'center',
            justifyItems: 'right',
          }}
        >
          <Typography.Title level={4} style={{margin: '0'}}>
            {dish.name}
          </Typography.Title>
          <Typography.Text style={{margin: '0'}}>{dish.price}</Typography.Text>
          <Divider type="vertical" />
          <Typography.Text>{counter}</Typography.Text>
        </div>
      }
    >
      <ul>
        {dish.ingredients.map((ingredient, id) => (
          <li key={id}>ingredient</li>
        ))}
      </ul>
    </Card>
  )
}

export default counterDecorator(Dish)
