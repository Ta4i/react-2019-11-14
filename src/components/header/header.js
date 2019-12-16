import React from 'react'
import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LanguageSwitcher from '../language-switcher'

function Header(props) {
  return (
    <header className={styles.header}>
      <LanguageSwitcher onLanguageSwitch={props.onLanguageSwitch} />
      <Logo />
      <CartBadge />
    </header>
  )
}

export default Header
