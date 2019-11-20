import React from 'react'
import {Comment, Avatar, Typography} from 'antd'

import classes from './comments.module.css'

const Comments = props => {
  const createComments = () => {
    return props.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          author={<a>{comment.user}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={comment.user}
            />
          }
          content={<p>{comment.text}</p>}
        />
      )
    })
  }

  return (
    <div className={classes.Comments}>
      <Typography.Title level={3}>Comments</Typography.Title>
      {createComments()}
    </div>
  )
}

export default Comments
