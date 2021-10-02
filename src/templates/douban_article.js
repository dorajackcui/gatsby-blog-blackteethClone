import React from 'react'
import ArticleLayout from '../components/ArticleLayout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'


export default function ArticleDetails ({ data }){
  
  const { html, excerpt:description } = data.markdownRemark
  const { title, date }  = data.markdownRemark.frontmatter  
  
  
  return (
    <ArticleLayout title={title} description={description}>
      
      <div className={styles.title}>{title}</div>

      <div className={styles.details}>
        <h3 className={styles.info}>{date}</h3>
        <hr/>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        <ScrollToTop 
          showUnder={1000}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className={styles.scrollUp} viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </ScrollToTop>
      </div>
      
    </ArticleLayout>
  )
}


export const articleQuery = graphql`
  query postDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        author
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
