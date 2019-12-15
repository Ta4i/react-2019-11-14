import React, {Component} from 'react'
import styles from '../restaurants-navigation/restaurants-navigation.module.css'
import { LEFT } from '../../languages/orientation'
import {withLanguageContext} from '../../decorators/language'

class Menu extends Component {
  render = () => (
    <div 
      className={styles.list}
      style={{flexDirection: this.props.language.orientation === LEFT ? 'row' : 'row-reverse'}}
    >
      {this.props.children}
    </div>
  )
}

export default withLanguageContext(Menu)
