import React from 'react'
import {Rate} from 'antd'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

function Rater(props) {
  const {value} = props
  return (
    <span>
      <Rate tooltips={desc} disabled value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  )
}

export default Rater
