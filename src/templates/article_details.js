import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'


export default function ArticleDetails ({ data }){
  
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  

  return (
    <Layout>
      
      <div className={styles.details}>
        <h3 className={styles.info}>文：{stack} &nbsp; &nbsp; &nbsp; &nbsp;译：抑之</h3>
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
