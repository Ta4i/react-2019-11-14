import React from 'react'
import {Card, Typography, Row, Col} from 'antd'
import {connect} from 'react-redux'
import {allOrderSum} from '../../store/action-creators'
import styles from './all-order.module.css'

function AllOrder(props) {
  const {
    allOrder: {restaurants, cart},
  } = props

  let restaurantsMenu = restaurants.reduce((arr, current) => {
    return arr.concat(current.menu)
  }, [])

  let allOrrderSumm = restaurantsMenu.reduce((orderMenu, current) => {
    if (cart[current.id] > 0) {
      orderMenu += cart[current.id] * current.price
    }

    return orderMenu
  }, 0)

  props.allOrderSumDispatch(allOrrderSumm)

  let createOrder = (
    <Card>
      <Row className={styles.orderBlock}>
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={2}>All orders</Typography.Title>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <Typography.Title level={2}>
            <span className={styles.titlePrice}>{allOrrderSumm} $</span>
          </Typography.Title>
        </Col>
      </Row>
      {restaurantsMenu.map(menu => {
        if (cart[menu.id] > 0) {
          return (
            <Row key={menu.id} className={styles.orderBlock}>
              <Col xs={16} md={16} lg={20} align="left">
                <Typography.Title level={4} className={styles.title}>
                  {menu.name}
                </Typography.Title>
                <div className={styles.price}>{menu.price} $</div>
              </Col>
              <Col xs={8} md={6} lg={4} align="right">
                <Typography.Title level={4} className={styles.title}>
                  {cart[menu.id]}
                </Typography.Title>
                <div className={styles.price}>
                  {cart[menu.id] * menu.price} $
                </div>
              </Col>
            </Row>
          )
        }

        return null
      })}
    </Card>
  )

  return <>{createOrder}</>
}

const mapsStateToProps = state => {
  return {
    allOrder: state,
  }
}

const mapDispatchToProps = {
  allOrderSumDispatch: allOrderSum,
}

AllOrder.defaultProps = {
  allOrder: {},
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(AllOrder)
