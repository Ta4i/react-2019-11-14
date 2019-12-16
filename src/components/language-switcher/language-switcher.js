import React from 'react'
import {Radio} from 'antd'
import styles from './language-switcher.module.css'

function LanguageSwitcher({onLanguageSwitch}) {
  let handleLanguageSwitch = e => {
    onLanguageSwitch(e.target.value)
  }

  return (
    <div className={styles.switcher}>
      <div className={styles.switcher__heading}>Language:</div>
      <Radio.Group
        onChange={handleLanguageSwitch}
        defaultValue="en"
        className={styles.switcher__items}
      >
        <Radio value="en" className={styles.switcher__item}>
          En
        </Radio>
        <Radio value="ru" className={styles.switcher__item}>
          Ru
        </Radio>
      </Radio.Group>
    </div>
  )
}

export default LanguageSwitcher
