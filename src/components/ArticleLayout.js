import React from 'react'
import BackHome from './BackHome'
import '../styles/global.css'
import { useStaticQuery, graphql } from "gatsby"
import Seo from './Seo'


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
      <Seo />
      <BackHome />
      <div className="content">
        { children }
      </div>
    </div>
  )
}