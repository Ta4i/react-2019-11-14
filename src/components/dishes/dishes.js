import React, {useEffect} from 'react'
import Dish from '../dish'

function Dishes(props) {
  const {menu} = props

  useEffect(() => {
    props.fetchDishes && props.fetchDishes()
  }, [])

  return (
    <div data-automation-id="DISHES">
      {menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Dishes
