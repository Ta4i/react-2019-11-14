import React from 'react'
import OrderListItem from './orderListItem'

function OrderList(props) {
  return (
    <div>
      <h2>Ваш заказ:</h2>
      {/* Тут должен был быть вывод ↓↓↓ */}
      <OrderListItem />
      {/* Тут должен был быть вывод ↑↑↑ */}
    </div>
  )
}

export default OrderList
