import React, {Component} from 'react'
import Review from '../review'
import {Row, Col, Typography} from 'antd'

const {Title} = Typography

class Reviews extends Component {
  render() {
    const {reviews} = this.props
    return (
      <Row>
        <Title level={4}>Reviews</Title>
        <Row type="flex" gutter={16}>
          {reviews.map(review => (
            <Col span={8}>
              <Review key={review.id} review={review} />
            </Col>
          ))}
        </Row>
      </Row>
    )
  }
}

export default Reviews
