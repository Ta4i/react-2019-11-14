import React from 'react'
import {Link} from 'react-router-dom'

function OrderComplete() {
  return (
    <div>
      <h1 align="center"> Thank you! </h1>
      <Link to={'/restaurant/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'}>Back</Link>
    </div>
  )
}

export default OrderComplete
