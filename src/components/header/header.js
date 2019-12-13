import React from 'react'
import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import {Select, Icon} from 'antd'
import {useState} from 'react'

function Header(props) {
  const [stateInter, setStateInter] = useState('en')

  const handleChange = value => {
    setStateInter(value)
    props.onInterChange(value)
  }

  const {Option} = Select
  return (
    <header className={styles.header}>
      <Logo />
      <Select
        defaultValue={stateInter}
        className={styles.inter}
        onChange={handleChange}
      >
        <Option value="en">
          <Icon type="global" style={{color: 'green'}} />
          &nbsp;&nbsp;En
        </Option>
        <Option value="ru">
          <Icon type="home" style={{color: 'blue'}} />
          &nbsp;&nbsp;Ru
        </Option>
      </Select>
      <CartBadge />
    </header>
  )
}

export default Header
