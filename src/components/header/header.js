import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LangSwitcher from '../lang-switcher'

function Header({onLanguageChange}) {
  return (
    <header className={styles.header}>
      <LangSwitcher onLanguageChange={onLanguageChange} />
      <Logo />
      <CartBadge />
    </header>
  )
}

export default Header
