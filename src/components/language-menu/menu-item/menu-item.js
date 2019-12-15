import React from 'react'
import cx from 'classnames'
import styles from './menu-item.module.css'
import {withLanguageContext} from '../../../decorators/language'
import { LEFT } from '../../../languages/orientation'

const MenuItem = ({
  children, 
  onLanguageChange,
  to,
  language : {
    orientation,
    id,
  },
}) => (
    <button
      className={cx(
        styles.link,
        orientation === LEFT ? styles.left : styles.right,
        id === to.id ? styles.activeLink : '',
      )}
      onClick={onLanguageChange}
    >
      {children}
    </button>
  )

export default withLanguageContext(MenuItem)
