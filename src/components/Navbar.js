import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {

  

  return (
    <nav>
      <ul>
        <li className="home" >
         <Link to="/">Home</Link>
        </li>
        <li className="articles" >
          <Link to="/articles">Traduction poems </Link>
        </li>
        <li className="projects" >
          <Link to="/projects"> Projects </Link>
        </li>
        <li className="about" >
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
