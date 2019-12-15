import React from 'react'
import Menu from './menu'
import MenuItem from './menu-item'
import {languages} from '../../languages'

const LanguageMenu = ({onLanguageChange}) => (
  <Menu>
    {languages.map((language, index) => (
      <MenuItem key={index} to={language} onLanguageChange={onLanguageChange.bind(null,language)}>
        {language.name}
      </MenuItem>
    ))}
  </Menu>
)

export default LanguageMenu
