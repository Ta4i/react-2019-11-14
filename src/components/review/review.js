import React, {Component} from 'react'
import Rating from '../rating'
import {Card} from 'antd'

class Review extends Component {
  render() {
    const {review} = this.props
    return (
      <Card title={review.user} bordered={false}>
        <p>{review.text}</p>
        <Rating rating={review.rating} />
      </Card>
    )
  }
}

export default Review
