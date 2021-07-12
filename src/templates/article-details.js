import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/article-details.module.css"
import { graphql } from "gatsby"

// const ArticleDetails=() => {
//     return (
//         <Layout>
//             <div className={styles.details}>
//                 <h2>title</h2>
//                 <h3>description</h3>
//             </div>
//             {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
//         </Layout>
//     )
// }

// export default ArticleDetails

const ArticleDetails = ({ data }) => {
    const { html } = data.markdownRemark
    const { title, description } = data.markdownRemark.frontmatter
  
    return (
      <Layout>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    )
  }
   
  export default ArticleDetails
  
  export const query = graphql`
    query ArticleDetails($slug: String) {
      markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
          description
          title
        }
      }
    }
  `