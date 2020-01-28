import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import i18n from '../decorators/i18n'

function OrderComplete({t}) {
  return (
    <UserConsumer>
      {userName => (
        <h1
          style={{
            textAlign: 'center',
            padding: '128px 0',
          }}
        >
          {`${userName}, ${t('Thanks')}`}
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

export default i18n(OrderComplete)
