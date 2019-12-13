import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'

function OrderComplete() {
  return (
    <UserConsumer>
      {userName => (
        <h1
          style={{
            textAlign: 'center',
            padding: '128px 0',
          }}
        >
          {`Thanks ${userName}`}
          <span
            role={'img'}
            aria-label={'cook'}
            style={{
              padding: '0 12px',
            }}
          >
            👨‍🍳
          </span>
        </h1>
      )}
    </UserConsumer>
  )
}

export default OrderComplete
