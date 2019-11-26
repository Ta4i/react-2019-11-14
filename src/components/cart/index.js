import React, {Component} from 'react'
import Modal from '../modal'
import {connect} from 'react-redux'
import {Table} from 'antd'
import './style.scss'

class Cart extends Component {
  render() {
    const {
      cart: {items},
      restaurants,
    } = this.props
    let dishes = []
    for (const key in items) {
      if (items.hasOwnProperty(key)) {
        const element = items[key]
        dishes = [...dishes, ...element]
      }
    }

    let restaurantDishes = []
    for (const key in restaurants) {
      if (restaurants.hasOwnProperty(key)) {
        const element = restaurants[key].menu
        restaurantDishes = [...restaurantDishes, ...element]
      }
    }
    let countDishes = {}
    dishes.forEach(el => {
      if (!countDishes[el]) return (countDishes[el] = 1)
      return (countDishes[el] = countDishes[el] + 1)
    })

    const selectedDishes = restaurantDishes
      .filter(dish => {
        return countDishes[dish.id]
      })
      .map(dish => {
        return {
          ...dish,
          count: countDishes[dish.id],
          totalPrice: dish.price * countDishes[dish.id],
        }
      })

    const columns = [
      {
        title: 'Наименование блюда',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Стоимость',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Кол-во',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: 'Общая стоимость',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
      },
    ]

    const totalPrice = selectedDishes.reduce((acc, cur) => {
      return +cur.totalPrice + acc
    }, 0)
    return (
      <Modal width={800}>
        <div className="cart-container">
          <Table dataSource={selectedDishes} columns={columns} />
          <div className="cart-total">
            Общая стоимость всего заказа на: {totalPrice}
          </div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  restaurants: state.restaurants,
})

export default connect(mapStateToProps)(Cart)
