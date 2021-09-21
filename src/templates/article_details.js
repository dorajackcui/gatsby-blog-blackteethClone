import React from 'react'
import ArticleLayout from '../components/ArticleLayout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'


export default function ArticleDetails ({ data }){
  
  const { html, excerpt:description } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter  
  
  
  return (
    <ArticleLayout title={title} description={description}>
      
      <div className={styles.details}>
        <div className={styles.info}>文：{stack} &nbsp; &nbsp; &nbsp; &nbsp;译：抑之</div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }}/>
        <ScrollToTop 
          showUnder={1000}>
          <span className={styles.scrollUp}>↑</span>
        </ScrollToTop>
      </div>
      
    </ArticleLayout>
  )
}


export const articleQuery = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        stack
        title
      }
    }
  }
`
