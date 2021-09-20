import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/articles.module.css'
import { Link, graphql } from 'gatsby'


function index({data}) {

  const articles = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <main>
        <section className={styles.articlesContainer}>
        {articles.map( article => (
          <Link to={"/articles/" + article.frontmatter.slug} key={article.id} className={styles.article}>
            <div className={styles.articleTitle}>
              {article.frontmatter.title}
            </div>
            <div className={styles.articleDetails}>
              {article.frontmatter.stack}
            </div>
          </Link>
        ))}

        </section>
      </main>
    </Layout>
  )
}

export default index

export const query = graphql`
  query ArticlesQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}){
      nodes {
        frontmatter {
          title
          stack
          slug
        }
      }
    }
  }
`
