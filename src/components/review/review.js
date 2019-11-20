import React, {Component} from 'react'
import {Comment, Rate} from 'antd'

class Review extends Component {
  render() {
    const {user, text, rating} = this.props
    return (
      <React.Fragment>
        <Comment
          author={user}
          content={text}
          actions={[
            <span key="comment-basic-like">
              <Rate allowHalf defaultValue={rating} />
            </span>,
          ]}
        />
      </React.Fragment>
    )
  }
}

export default Review
