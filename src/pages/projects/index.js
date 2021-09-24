import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import * as styles from '../../styles/articles.module.css'

export default function projects({data}) {
  
  const articles = data.allArticlesCsv.nodes


  return (
    <Layout>
      
      <main>
        <section className={styles.articlesContainer}>
        {articles.map( article => (
          <Link to={"/projects/" + article.id} key={article.id} className={styles.article}>
            <div className={styles.articleTitle}>
              {article.title}
            </div>
            <div className={styles.articleDetails}>
              {article.createdTime}
            </div>
          </Link>
        ))}

        </section>
      </main>
    </Layout>
  )
  }

export const query = graphql`
  query Douban {
    allArticlesCsv {
      nodes {
        title
        createdTime(fromNow: true)
        id
      }
    }
  }  
`

