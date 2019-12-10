import React from 'react'
import {Spin} from 'antd'

function Loader(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <Spin size={'large'} />
    </div>
  )
}

export default Loader
