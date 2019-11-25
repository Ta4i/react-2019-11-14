import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge amount={0} />
    </header>
  )
}

export default Header
