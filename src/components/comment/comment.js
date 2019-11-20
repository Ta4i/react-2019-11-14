import React, {Component} from 'react'
import {Comment, Avatar} from 'antd'

class Comments extends Component {
  render() {
    const {reviewer} = this.props
    return (
      <Comment
        key={reviewer.id}
        author={<a>{reviewer.user}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={<p>{reviewer.text}</p>}
      />
    )
  }
}

export default Comments
