import React from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../../store/selectors'

function OrderItems(props) {
  const orderedDishes = Object.values(props.order.dishes)

  const order = orderedDishes.map(dish => {
    return {
      dishId: dish.dish.id,
      dishName: dish.dish.name,
      dishPrice: dish.dish.price,
      dishOrdered: dish.amount,
      dishTotalPrice: dish.totalDishPrice,
    }
  })

  const {Column} = Table
  const footer = () => `Summary of order:  ${props.order.totalPrice}$`

  return (
    <div>
      <Table dataSource={order} rowKey="dishId" footer={footer}>
        <Column title="Dish" dataIndex="dishName" key="dishName" />
        <Column title="Ordered" dataIndex="dishOrdered" key="dishOrdered" />
        <Column title="Price, $" dataIndex="dishPrice" key="dishPrice" />
        <Column
          title="Total price for dish, $"
          dataIndex="dishTotalPrice"
          key="dishTotalPrice"
        />
      </Table>
    </div>
  )
}

export default connect(state => {
  return {
    order: selectOrderedDishes(state),
  }
})(OrderItems)
