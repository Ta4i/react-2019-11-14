import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './order.module.css'
import {Modal, Button, Table, Typography} from 'antd'
import {connect} from 'react-redux'

const Order = props => {
  const {order, dispatch, ...restProps} = props
  const orderData = order ? Object.values(order) : []

  const [visible, setVisible] = useState(false)
  const handleCancel = () => setVisible(false)
  const showModal = () => setVisible(true)

  const columns = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      render: (value, record) => (
        <span>
          {value}{' '}
          <span className={styles.restaurantName}>{record.restaurant}</span>
        </span>
      ),
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
      render: value => <span>${value}</span>,
    },
    {
      key: 'amount',
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      key: 'totalPrice',
      title: 'Total price',
      dataIndex: 'totalPrice',
      render: value => <span>${value}</span>,
    },
  ]

  const data = orderData.map((item, i) => ({
    key: i,
    ...item,
    totalPrice: item.price * item.amount,
  }))

  const totalPrice = orderData.reduce(
    (acc, item) => (acc += item.price * item.amount),
    0
  )

  return (
    <div>
      <Button type="primary" onClick={showModal} {...restProps} />
      <Modal
        visible={visible}
        title="Your cart"
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={true}
            className={styles.button}
          >
            Buy
          </Button>,
        ]}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          data-automation-id="ORDER__LIST"
        />
        <Typography.Text className={styles.totalPrice}>
          Total price: ${totalPrice}
        </Typography.Text>
      </Modal>
    </div>
  )
}

Order.propTypes = {
  order: PropTypes.objectOf(
    PropTypes.exact({
      amount: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      restaurant: PropTypes.string.isRequired,
    })
  ).isRequired,
}

const mapsStateToProps = state => ({
  order: Object.keys(state.cart).reduce(
    (obj, id) =>
      Object.assign(obj, {
        [id]: {
          amount: state.cart[id],
          ...state.dishesForOrder[id],
        },
      }),
    {}
  ),
})

export default connect(mapsStateToProps)(Order)
