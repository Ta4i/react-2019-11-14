import React, {Component} from 'react'
import styles from '../restaurants-navigation/restaurants-navigation.module.css'

class Menu extends Component {
  render() {
    return <div className={styles.list}>{this.props.children}</div>
  }
}

export default Menu
