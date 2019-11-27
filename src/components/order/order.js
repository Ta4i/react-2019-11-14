import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

const order = props => {
  console.log(props)
  //can pretty much memo all the data related to restaurant for optimization
  let allDishes = []
  props.restaurants.forEach(
    restaurant => (allDishes = [...allDishes, ...restaurant.menu])
  )
  let total = 0
  const cardDishes = _.map(props.cart, (val, key) => {
    const dish = allDishes.find(dish => dish.id === key)
    const price = dish.price * val
    total += price
    return (
      <>
        <div>
          {dish.name} x {val} = ${price}
        </div>
        <hr />
      </>
    )
  })
  return (
    <div>
      {cardDishes}
      {!!total && <div>Total: ${total}</div>}
    </div>
  )
}
const mapStateToProps = ({restaurants, cart}) => ({
  restaurants,
  cart,
})

export default connect(mapStateToProps)(order)
