import React from 'react'
import Rating from '../rating'
import Reviews from '../reviews'
import { Divider } from 'antd'

function Restaurant(props) {
  const {currentRestaurant} = props

  return (
    <div>
      <h2 style={{marginBottom:'0'}}>{currentRestaurant.name}</h2>
        <Divider orientation="center" style={{display: 'inline-block', backgroundColor: '#555555', minWidth: '0px', width: '25%'}} />
      <Rating currentRestaurant={currentRestaurant}/>
        <Divider orientation="center" style={{display: 'inline-block', backgroundColor: '#555555', minWidth: '0px', width: '18%'}} />
      <Reviews currentReviews={currentRestaurant.reviews}/>
    </div>
  )
}

export default Restaurant
