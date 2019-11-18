import React, {Component} from 'react'
import {Rate} from 'antd'

class Rating extends Component {
  render() {
    const rating = this.props.rating
    return (
      <div>
        <h2>Rate Comp</h2>
        <Rate disabled defaultValue={rating} />
      </div>
    )
  }
}

export default Rating
