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
      <Rate
        className={this.props.className}
        disabled
        allowHalf
        defaultValue={0}
        value={numRound(rating, roundingToNum)}
      />
    )
  }
}

export default Rating
