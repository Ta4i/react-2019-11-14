import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import {Consumer as LanguageConsumer, languageVars} from '../contexts/language'

function OrderComplete() {
  return (
    <LanguageConsumer>
      {language => (
        <UserConsumer>
          {userName => (
            <h1
              style={{
                textAlign: 'center',
                padding: '128px 0',
              }}
            >
              {`${languageVars.orderSuccessMsg[language]}, ${userName}!`}
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
      )}
    </LanguageConsumer>
  )
}

export default OrderComplete
