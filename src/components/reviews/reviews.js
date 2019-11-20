import React, {Component} from 'react'
import Review from '../review'

class Reviews extends Component {
  render() {
    const {reviews} = this.props
    return (
      <div>
        {reviews.map(review => (
          <Review
            key={review.id}
            user={review.user}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>
    )
  }
}

export default Reviews
