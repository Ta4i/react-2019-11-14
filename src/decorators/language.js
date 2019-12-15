import React from 'react'
import {Consumer} from '../contexts/language'

export const withLanguageContext = Component => props => (
    <Consumer>
		{language => (<Component {...props} language={language} />)}
	</Consumer>
)