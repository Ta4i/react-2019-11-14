import React from 'react'
import {Result, Button, Layout} from 'antd'
import {Link} from 'react-router-dom'
import '../orders.css'

function GetOrder() {
  return (
    <Layout className="orders__wrapper">
      <Result
        status="success"
        title="Thank's for you order!"
        subTitle="Order number: 12345. We call you about 5-10 minutes!"
        extra={[
          <Link to="/order" key="_1">
            <Button type="primary" block>
              Back to order
            </Button>
          </Link>,
          <Link to="/" key="_2">
            <Button type="link" block>
              Back to restaurants
            </Button>
          </Link>,
        ]}
      />
    </Layout>
  )
}

export default GetOrder
