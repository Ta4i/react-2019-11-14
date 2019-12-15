import React from 'react'
import { LEFT } from '../../../languages/orientation'
import {withLanguageContext} from '../../../decorators/language'

const Menu = props => (
  <div 
    style={{
      display: 'flex', 
      flexDirection: (props.language.orientation === LEFT) ? 'row' : 'row-reverse',
    }}
  >
    {props.children}
  </div>
)

export default withLanguageContext(Menu)
