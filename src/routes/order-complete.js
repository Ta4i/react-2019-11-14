import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import {Consumer as LanguageConsumer} from '../contexts/language'
import {connect} from 'react-redux'
import {selectDictionaries} from '../store/selectors'

function OrderComplete(props) {
  const {dictionary} = props
  return (
    <UserConsumer>
      {userName => (
        <LanguageConsumer>
          {language => (
            <h1
              style={{
                textAlign: 'center',
                padding: '128px 0',
              }}
            >
              {`${dictionary[language].thanks} ${userName}`}
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
        </LanguageConsumer>
      )}
    </UserConsumer>
  )
}

export default connect(state => ({
  dictionary: selectDictionaries(state).orderComplite,
}))(OrderComplete)
