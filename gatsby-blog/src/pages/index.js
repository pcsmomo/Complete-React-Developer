import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Noah's Thoughts</h1>
        <h4>{totalCount} Posts</h4>
        {edges.map(({ node }) => {
          const { id, frontmatter, excerpt, fields } = node
          return (
            <div key={id}>
              <BlogLink to={fields.slug}>
                <BlogTitle>
                  {frontmatter.title} - {frontmatter.date}
                </BlogTitle>
              </BlogLink>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
