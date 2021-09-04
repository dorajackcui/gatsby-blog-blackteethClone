import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'


export default function ArticleDetails ({ data }){
  
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  

  return (
    <Layout>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <h3 className={styles.info}>{stack}</h3>
        <hr/>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      
    </Layout>
  )
}


export const articleQuery = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`
