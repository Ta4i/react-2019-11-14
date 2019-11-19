import React, {Component} from 'react'
import {Rate} from 'antd'

class Rating extends Component {
  render() {
    const rating = this.props.rating
    const roundingToNum = 0.5

    const numRound = (num, precision) => {
      return Math.round(num / precision) * precision
    }

    return (
      <div>
        <h2>Rate Comp</h2>
        <Rate
          disbled
          allowHalf
          defaultValue={0}
          value={numRound(rating, roundingToNum)}
        />
      </div>
    )
  }
}

export default Rating
