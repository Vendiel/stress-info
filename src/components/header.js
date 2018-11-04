import React from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import logo from "../images/hjortron.png"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className = { "header" }>
      <div className = { "logo "}>
        <img src={logo} alt="Logo" />
      </div>
      <h1>
        <Link to="/"> { siteTitle } </Link>
      </h1>
      <Navigation></Navigation>
  </div>
)

export default Header
