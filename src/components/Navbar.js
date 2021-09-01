import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {


  

  return (
    <nav>
      <ul>
        <li className="home" >
         <Link activeClassName="active-page" to="/">Home</Link>
        </li>
        <li className="articles" >
          <Link activeClassName="active-page" to="/articles">Traduction & Poems </Link>
        </li>
        <li className="projects" >
          <Link activeClassName="active-page" to="/projects"> Projects </Link>
        </li>
        <li className="about" >
          <Link activeClassName="active-page" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
