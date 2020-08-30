import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function Home({ data }) {
  return <Layout>
      <h1 className='italic font-lg'>Entradas recientes</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2 className='text-green text-semibold italic text-lg'>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.excerpt}</p>
          </div>
        ))}
    </Layout>
}



export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY"),
            excerpt
          }
        }
      }
    }
  }
`