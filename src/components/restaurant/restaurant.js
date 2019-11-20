import React from 'react'
import {Button} from 'antd'

const Restaurant = props => {
  const {name, onClick} = props
  return (
    <Button type="primary" onClick={onClick}>
      {name}
    </Button>
  )
}

export default Restaurant
