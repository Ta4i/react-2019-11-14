import React from 'react'
import {Typography, Button} from 'antd'
import style from './success-order.module.css'
import {Link} from 'react-router-dom'

function SuccessOrder(props) {
  return (
    <div>
      <Typography.Title className={style.title}>
        Спасибо за ваш заказ!
      </Typography.Title>
      <Button type="primary">
        <Link to="/restaurant">заказать еще</Link>
      </Button>
    </div>
  )
}

export default SuccessOrder
