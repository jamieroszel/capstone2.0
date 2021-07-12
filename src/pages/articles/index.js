import React from 'react'
import Layout from "../../components/Layout"
import * as styles from '../../styles/articles.module.css'
import { Link, graphql } from 'gatsby'

const Articles = ({ data }) => {
  console.log(data)
  const articles = data.articles.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.articleIndex}>
        <h2>Articles</h2>
        <h3>Various articles</h3>
        <div className={styles.articles}>
          {articles.map(article => (
            <Link to={"/articles/" + article.frontmatter.slug} key={article.id}>
              <div>
                <h3>{article.frontmatter.title}</h3>
                <h4> Description: {article.frontmatter.description}</h4>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you've read? Let me know at {contact}.</p>

      </div>
    </Layout>
  );
}

export default Articles

// export page query
export const query = graphql`
  query ArticlesPage {
    articles: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          description
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`