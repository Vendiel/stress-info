import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'


const Navigation = () => (
    <ul className = { "navigation "}>
        <li><Link to="/">Start</Link></li>
        <li><Link to="/information/">Information</Link></li>
        <li><Link to="/stressorer/">Stressorer</Link></li>
        <li><Link to="/aterhamtning/">Återhämtning</Link></li>
        <li><Link to="/vitaminer/">Vitaminer</Link></li>
        <li><Link to="/termer/">Termer</Link></li>
        <li><Link to="/podcasts/">Podcasts och böcker</Link></li>
    </ul>
)

export default Navigation
