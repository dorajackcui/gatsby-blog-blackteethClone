import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {

  return (
    <nav>
      <ul>
        <li className="home" >
         <Link className="link" activeClassName="active-page" to="/">Home</Link>
        </li>
        <li >
          <Link className="link" activeClassName="active-page" to="/articles">Traductions</Link>
        </li>
        <li >
          <Link className="link" activeClassName="active-page" to="/projects"> Douban Archive </Link>
        </li>
        <li >
          <Link className="link" activeClassName="active-page" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
