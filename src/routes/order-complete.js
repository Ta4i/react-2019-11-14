import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import {
  Consumer as InterConsumer,
  interValuesOrderComplete,
} from '../contexts/inter'

function OrderComplete() {
  return (
    <UserConsumer>
      {userName => (
        <InterConsumer>
          {interType => (
            <h1
              style={{
                textAlign: 'center',
                padding: '128px 0',
              }}
            >
              {`${
                interValuesOrderComplete.orderFormMessage[interType]
              } ${userName}`}
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
        </InterConsumer>
      )}
    </UserConsumer>
  )
}

export default OrderComplete
