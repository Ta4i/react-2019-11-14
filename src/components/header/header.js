import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LanguageButton from '../language-button'

function Header(props) {
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge />
      <LanguageButton onLanguageChange={props.onLanguageChange} />
    </header>
  )
}

export default Header
