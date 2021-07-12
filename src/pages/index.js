import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({data}) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Markdown Dev</h2>
          <h3>A place to organize my thoughts</h3>
          <p>Markdown Dev is maintained by Jamie Roszel, a technical writer based in Apex, NC. </p>
          <Link className={styles.btn} to="/articles">Read on...</Link>
        </div>
      </section>
    </Layout>
  )
}
