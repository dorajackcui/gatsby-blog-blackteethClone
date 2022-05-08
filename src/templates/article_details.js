import React from 'react'
import ArticleLayout from '../components/ArticleLayout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'


export default function ArticleDetails ({ data }){
  
  const { html, excerpt:description } = data.markdownRemark
  const { title, author } = data.markdownRemark.frontmatter  
  
  
  return (
    <ArticleLayout title={title} description={description}>
      
      <div className={styles.details}>
        <div className={styles.info}>文：{author} &nbsp; &nbsp; &nbsp; &nbsp;译：抑之</div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }}/>
        <ScrollToTop 
          showUnder={1000}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={styles.scrollUp} viewBox="0 0 16 16">
            {/* <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/> */}
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>

          </svg>
            
        </ScrollToTop>
      </div>
      
    </ArticleLayout>
  )
}


export const articleQuery = graphql`
  query articleDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        author
        title
      }
    }
  }
`
