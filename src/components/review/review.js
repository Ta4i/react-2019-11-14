import React from 'react'
import Rating from '../rating'

export default function review({rating, user, text}) {
  return (
    <div>
      <Rating value={rating} />
      <div>
        <b>User</b>: {user}
      </div>
      <div>
        <b>Review</b>: {text}
      </div>
    </div>
  )
}
