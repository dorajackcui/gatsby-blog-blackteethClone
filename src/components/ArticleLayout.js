import React from 'react'
import BackHome from './BackHome'
import '../styles/global.css'
// import { useStaticQuery, graphql } from "gatsby"
import Seo from './Seo'


export default function Layout({ description, title, children }) {
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         copyright
  //       }
  //     }
  //   }
  // `)
  // const { copyright } = data.site.siteMetadata

  

  return (
    <div className="layout">
      <Seo title={title} description={description}/>
      <BackHome />
      <div className="content">
        { children }
      </div>
      {/* <div> { copyright } </div> */}
    </div>
  )
}