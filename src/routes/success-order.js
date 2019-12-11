import React from 'react'
import {Route} from 'react-router-dom'
import SuccessOrder from '../components/success-order'

function SuccessOrderPage() {
  return <Route path="success_order" component={SuccessOrder} />
}

export default SuccessOrderPage
