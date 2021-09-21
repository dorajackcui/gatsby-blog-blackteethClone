import React from 'react'
import ArticleLayout from '../components/ArticleLayout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'


export default function ArticleDetails ({ data }){
  
  const { title, articleContent, createdTime } = data.articlesCsv
  
  return (
    <ArticleLayout title={title}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <h3 className={styles.info}>{createdTime}</h3>
        <hr/>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: articleContent }} />
        <ScrollToTop 
          showUnder={1000}>
          <span className={styles.scrollUp}>↑</span>
        </ScrollToTop>
      </div>
      
    </ArticleLayout>
  )
}


export const articleQuery = graphql`
  query DoubanArticleCopy($id: String = "") {
    articlesCsv(id: {eq: $id}) {
      articleContent
      createdTime(fromNow: true)
      title
    }
  }

`
