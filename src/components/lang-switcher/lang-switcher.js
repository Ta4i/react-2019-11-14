import {Radio} from 'antd'
import React from 'react'
import './lang-switcher.css'

function LangSwitcher({onLanguageChange}) {
  let handleSizeChange = e => {
    onLanguageChange(e.target.value)
  }

  return (
    <Radio.Group
      onChange={handleSizeChange}
      className={'lang-switcher-container'}
    >
      <Radio.Button value="En">Eng</Radio.Button>
      <Radio.Button value="Ru">Rus</Radio.Button>
    </Radio.Group>
  )
}

export default LangSwitcher
