import React, {useState, useCallback} from 'react'
import {useAmount} from '../../custom-hooks/use-amount'

function Dish(props) {
  const {amount, decrease, increase} = useAmount(0)
  const {dish} = props
  return (
    <div>
      <h3>{dish.name}</h3>
      <p>{dish.price}</p>
      <div>
        <button onClick={decrease}>-</button>
        {amount}
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default Dish
