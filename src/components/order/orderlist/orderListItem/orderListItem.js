import React, {Component, useState} from 'react'
import {Modal, Button} from 'antd'
import {connect} from 'react-redux'
import {arrayOf} from 'prop-types'

function OrderListItem(props) {
  let values = ['Блюдо №1 5шт 100usd', ' ']

  return (
    <div>
      {/* Тут должен был быть вывод ↓↓↓ */}
      {values}
      {/* Тут должен был быть вывод ↑↑↑ */}
    </div>
  )
}

const mapsStateToProps = state => ({
  restaurants: state.restaurants,
  orderList: state.orderList,
})

export default connect(mapsStateToProps)(OrderListItem)
