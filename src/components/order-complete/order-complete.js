import React from 'react'
import {connect} from 'react-redux'
import {Result} from 'antd'
import {
  selectOrderLoading,
  selectOrderResponse,
} from '../../store/selectors'
import Loader from '../loader'

 const OrderComplete = ({order, orderLoading}) => {
  if (orderLoading) {
    return <Loader />
  }

  return (
    <Result
      status={order.success ? "success" : "warning"}
      title={order.success ? "Accepted." : "There are some problems."}
      subTitle={order.message}
    />
  )
}

const mapStateToProps = state => ({
  order: selectOrderResponse(state),
  orderLoading: selectOrderLoading(state),
})

export default connect(mapStateToProps)(OrderComplete)
