import React from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import './header.css'

const Header = ({ siteTitle }) => (
      <div className = { "header" }>
        <div className= { "wrapper" } >
          <h1>
            <Link to="/"> { siteTitle } </Link>
          </h1>

          <Navigation></Navigation>

        </div>
      </div>
)

export default Header
