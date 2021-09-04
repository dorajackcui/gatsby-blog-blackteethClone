import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/details.module.css'
import { graphql } from 'gatsby'


export default function ArticleDetails ({ data }){
  
  const { title, articleContent, createdTime } = data.articlesCsv
  
  console.log(title)

  return (
    <Layout>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <h3 className={styles.info}>{createdTime}</h3>
        <hr/>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: articleContent }} />
      </div>
      
    </Layout>
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
