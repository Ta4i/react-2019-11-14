import React, {Component} from 'react'
import Review from '../review'

class Reviews extends Component {
  render() {
    const {reviews} = this.props
    return (
      <div>
        <b>Reviews:</b>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    )
  }
}

export default Reviews
//<Review key={review.id} review={review} />
