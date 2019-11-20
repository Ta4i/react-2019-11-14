import React from 'react'
import Review from '../review'

export default function reviews({reviews}) {
  return reviews.map(review => <Review key={review.id} {...review} />)
}
