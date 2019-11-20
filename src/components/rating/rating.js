import React from 'react'
import {Rate} from 'antd'

export default function rating({value}) {
  return <Rate count={5} value={value} disabled allowHalf />
}
