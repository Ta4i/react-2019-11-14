import React, {Component} from 'react'
import Rater from '../rater'

class Rating extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Rater
          value={Math.trunc(
            restaurant.reviews
              .map(review => {
                return review.rating
              })
              .reduce((a, b) => a + b, 0) / restaurant.reviews.length
          )}
        />
      </div>
    )
  }
}

export default Rating
