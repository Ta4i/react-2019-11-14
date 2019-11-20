import React from 'react'
import Dishes from '../dishes'
import Rating from '../rating'
import Reviews from '../reviews'

export default function restaurant({restaurant}) {
  const {reviews} = restaurant

  let averageRating =
    reviews.reduce((s, {rating}) => s + rating, 0) / reviews.length
  // окгругляем до 0.5
  averageRating = Math.round(averageRating * 2) / 2
  return (
    <>
      <h2>{restaurant.name}</h2>
      <Rating value={averageRating} />
      <hr />
      <Reviews reviews={reviews} />
      <Dishes menu={restaurant.menu} />
    </>
  )
}
