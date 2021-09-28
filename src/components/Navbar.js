import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {

  return (
    <nav>
      <ul>
        <li className="home" key="home">
         <Link className="link" activeClassName="active-page" to="/">Home</Link>
        </li>
        <li key="traductions">
          <Link className="link" activeClassName="active-page" to="/articles">Traductions</Link>
        </li>
        <li key="archive">
          <Link className="link" activeClassName="active-page" to="/douban"> Douban Archive </Link>
        </li>
        <li key="about">
          <Link className="link" activeClassName="active-page" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
