import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import {withLanguageContext} from '../decorators/language'
import { LEFT } from '../languages/orientation'

function OrderComplete({language: {titles, orientation}}) {
  return (
    <UserConsumer>
      {userName => (
        <h1
          style={{
            padding: '128px 0',
            display: 'flex',
            flexDirection: (orientation === LEFT) ? 'row' : 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{padding: '5px'}}>{titles.thanks}</span><span>{userName}</span>
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

export default withLanguageContext(OrderComplete)
