import React from 'react'
import {connect} from 'react-redux'
import {Result, Button, Icon} from 'antd'
import {
  selectOrderLoading,
  selectOrderResponse,
} from '../../store/selectors'
import Loader from '../loader'
import { Link } from 'react-router-dom'

 const OrderComplete = ({order, orderLoading}) => {
  if (orderLoading) {
    return <Loader />
  }

  return (
    <Result
      status={order.success ? "success" : "warning"}
      title={order.success ? "Accepted." : "There are some problems."}
      subTitle={order.message}
      extra={[
        <Link to={'/'} key="back">
          <Button type="primary"  size="large">
            <Icon type="left" />Back
          </Button>
        </Link>,
      ]}
    />
  )
}

const mapStateToProps = state => ({
  order: selectOrderResponse(state),
  orderLoading: selectOrderLoading(state),
})

export default connect(mapStateToProps)(OrderComplete)
