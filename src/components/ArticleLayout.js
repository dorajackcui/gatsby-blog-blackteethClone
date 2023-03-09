import React from 'react'
import BackHome from './BackHome'
import ReadingProgressBar from './ReadingProgressBar'
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


  const target = React.createRef()
  return (
    <div className="layout">
      <Seo title={title} description={description} />
      <ReadingProgressBar target={target} />
      <BackHome />
      <div className="content" ref={target}>
        {children}
      </div>
      {/* <div> { copyright } </div> */}
    </div>
  )
}