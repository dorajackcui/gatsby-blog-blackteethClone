import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {

  return (
    <nav >
      
      <Link className="backHome" to="../">
        <h4>Back</h4>
      </Link>
      
    </nav>
  )
}
