import React, {useState} from 'react'
import Dishes from '../dishes'
import Restaurant from '../restaurant'
import {restaurants} from '../../fixtures'

function Restaurants(props) {
  return (
    <div>
      <Restaurant restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
