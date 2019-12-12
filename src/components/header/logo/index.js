import React from 'react'

import LogoImg from './logo.svg'
import {Link} from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'}>
      <img src={LogoImg} alt="logo" />
    </Link>
  )
}

export default Logo
