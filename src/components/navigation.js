import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'


const Navigation = () => (
        <ul className = { "navigation "}>
            <li><Link to="/">Start</Link></li>
            <li><Link to="/vitaminer/">Information</Link></li>
            <li><Link to="/vitaminer/">Återhämtning</Link></li>
            <li><Link to="/vitaminer/">Vitaminer</Link></li>
            <li><Link to="/vitaminer/">Termer</Link></li>
            <li><Link to="/vitaminer/">Podcasts och böcker</Link></li>
        </ul>
)

export default Navigation
