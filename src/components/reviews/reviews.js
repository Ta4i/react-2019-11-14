import React, {Component} from 'react'
import {Divider, Rate} from 'antd'

class Reviews extends Component {
  render() {
    const {reviews} = this.props

    return (
      <div>
        {reviews.map(review => {
          return (
            <div key={review.id}>
              <div>
                <strong style={{margin: '0 20px 0 0 '}}>{review.user}</strong>
                <Rate key={review.id} disabled defaultValue={review.rating} />
              </div>
              <p>"{review.text}"</p>
              <div />
              <Divider />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Reviews
