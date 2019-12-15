import React from 'react'
import cx from 'classnames'
import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LanguageMenu from '../language-menu'
import { LEFT } from '../../languages/orientation'
import {withLanguageContext} from '../../decorators/language'

function Header({onLanguageChange, language: {orientation}}) {
  return (
    <header 
      className={cx(
        styles.header,
        orientation === LEFT ? styles.left : styles.right,
      )}
    >
      <LanguageMenu onLanguageChange={onLanguageChange} />
      <Logo/>
      <CartBadge />
    </header>
  )
}

export default withLanguageContext(Header)
