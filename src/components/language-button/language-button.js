import React from 'react'
import {Button} from 'antd'
import {Consumer as LanguageConsumer} from '../../contexts/language'
import './language-button.css'

function LanguageButton(props) {
  const handleLanguageChange = props.onLanguageChange
  return (
    <LanguageConsumer>
      {language => (
        <Button
          className="language-button"
          type="primary"
          onClick={() => handleLanguageChange()}
        >
          {language}
        </Button>
      )}
    </LanguageConsumer>
  )
}

export default LanguageButton
