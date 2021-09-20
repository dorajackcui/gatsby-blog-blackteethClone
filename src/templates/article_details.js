import React from 'react'
import ArticleLayout from '../components/ArticleLayout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'


export default function ArticleDetails ({ data }){
  
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  

  return (
    <ArticleLayout title={title}>
      
      <div className={styles.details}>
        <h3 className={styles.info}>文：{stack} &nbsp; &nbsp; &nbsp; &nbsp;译：抑之</h3>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      
    </ArticleLayout>
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
