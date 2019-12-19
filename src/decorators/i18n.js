import React, {useContext} from 'react'
import {LangContext} from '../contexts/i18n'
import dictionaries from '../dictionaries'

const i18n = OriginalComponent => props => {
  const lang = useContext(LangContext)
  return (
    <OriginalComponent {...props} t={createTranslate(dictionaries[lang])} />
  )
}

export const createTranslate = dictionary => text => dictionary[text] || text

export default i18n
