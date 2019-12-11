import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {selectOrderedDishes} from '../../store/selectors'

import {Button, Col, Row, Typography} from 'antd'

function Order({orderedDishes, history}) {
  const {dishes, totalPrice} = orderedDishes
  return (
    <div>
      {dishes.map(({dish, amount, restaurant}) => (
        <Row type="flex" align="middle">
          <Col span={12} align="left">
            <Typography.Text>{dish.name}</Typography.Text>
          </Col>
          <Col span={12} align="right">
            <Typography.Text>{dish.price * amount} $</Typography.Text>
          </Col>
        </Row>
      ))}
      <div>Total : ${totalPrice} </div>

      <Button
        type="primary"
        size="large"
        block
        onClick={() => history.push('/order-complete')}
      >
        Pay
      </Button>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(withRouter(Order))
