import React from 'react'
import {Route} from 'react-router-dom'
import Order from '../components/order'

function OrderPage() {
  return <Route path="/order" component={Order} />
}

export default OrderPage
