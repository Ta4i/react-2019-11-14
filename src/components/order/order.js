import React from 'react'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'
import {Table} from 'antd'

function Order({orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  const columns = [
    {
      title: 'DISH',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'TOTAl DISH PRICE',
      dataIndex: 'totalDishPrice',
      key: 'totalDishPrice',
    },
  ]
  const data = []
  dishes.map(({amount, dish, totalDishPrice}) =>
    data.push({
      key: dish.id,
      name: dish.name,
      price: dish.price,
      amount: amount,
      totalDishPrice: totalDishPrice,
    })
  )
  return (
    <div>
      <h2>Thank you for your order!</h2>
      <Table columns={columns} dataSource={data} />
      <h3>TOTAL PRICE: {totalPrice}$</h3>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Order)
