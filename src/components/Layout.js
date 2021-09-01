import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { useStaticQuery, graphql } from "gatsby"


export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata
  
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <h4>{ copyright }</h4>
      </footer>
    </div>
  )
}