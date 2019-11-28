import React, {Component} from 'react'
import {Row, Col, Table} from 'antd'
import Collapse from 'antd/es/collapse'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Order extends Component {
  render() {
    const dataSource = this.props.orders.map(order => {
      let item = this.props.restaurants
        .map(restaurant => restaurant.menu.find(dish => dish.id === order[0]))
        .find(dish => dish != undefined)
      item.amount = order[1]
      return item
    })
    let totalPrice = 0
    if (dataSource.length > 0) {
      totalPrice = dataSource.reduce(
        (acc, order) => acc + order.price * order.amount,
        0
      )
    }
    console.log(totalPrice)
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
    ]
    const {Panel} = Collapse
    return (
      <div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header={'ORDERS TOTAL PRICE: ' + totalPrice + '$'} key="1">
            <Table dataSource={dataSource} columns={columns} />
          </Panel>
        </Collapse>
      </div>
    )
  }
}

Order.defaultProps = {
  total: 0,
}

Order.propTypes = {
  restaurants: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  restaurants: state.restaurants,
  orders: Object.entries(state.cart).filter(order => order[1] > 0),
})

export default connect(mapStateToProps)(Order)
