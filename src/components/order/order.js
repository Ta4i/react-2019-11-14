import React from 'react'
import OrderItems from './orderItems'
import {Layout, Card, Divider, Button} from 'antd'
import {Link} from 'react-router-dom'
import './orders.css'

function Order() {
  return (
    <Layout className="orders__wrapper">
      <Card
        style={{width: '70%'}}
        headStyle={{fontSize: '3vw'}}
        title="Your order:"
      >
        <OrderItems />
        <Divider />

        <Link to="/getorder">
          <Button type="primary" block>
            Get order
          </Button>
        </Link>
        <Link to="/">
          <Button type="link" block>
            Back to restaurants
          </Button>
        </Link>
      </Card>
    </Layout>
  )
}

export default Order
