import React, {Component} from 'react'
import Rating from '../rating'

class Review extends Component {
  render() {
    const {review} = this.props
    console.log(review)
    return (
      <div>
        <b>{review.user}</b>
        <p>{review.text}</p>
        <Rating rating={review.rating} />
      </div>
    )
  }
}

export default Review
