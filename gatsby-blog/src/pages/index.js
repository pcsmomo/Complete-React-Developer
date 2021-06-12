import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Noah's Thoughts</h1>
        <h4>{totalCount}</h4>
        {edges.map(({ node }) => {
          const { id, frontmatter, excerpt } = node
          const { title, date } = frontmatter
          return (
            <div key={id}>
              <span>
                {title} - {date}
              </span>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          excerpt
        }
      }
    }
  }
`
