import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import LangSelect from '../lang-select'

function Header({lang, setLang}) {
  return (
    <header className={styles.header}>
      <Logo />
      <LangSelect currentLang={lang} setLang={setLang} />
    </header>
  )
}

export default Header
