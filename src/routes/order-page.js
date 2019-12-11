import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Order from '../components/order'
import orderComplete from '../components/order-complete'

function OrderPage() {
  return (
    <Switch>
    <Route 
      path="/order/complete" 
      component={orderComplete}
    />
    <Route
      path="/order"
      component={Order}
    />
    </Switch>
  )
}

export default OrderPage
