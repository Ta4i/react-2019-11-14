import React from 'react'
import {connect} from 'react-redux'
import OrderList from './orderlist'

function Order(props) {
  const visible = props.cartVisible
  const orderData = visible && (
    <div>
      <OrderList />
    </div>
  )

  return <div>{orderData}</div>
}

const mapsStateToProps = state => ({
  cartVisible: state.order.visible,
})

export default connect(mapsStateToProps)(Order)
