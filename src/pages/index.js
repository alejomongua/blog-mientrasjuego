import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export default function Home({ data }) {
  return <Layout>
    <Helmet>
      <meta charSet='utf-8' />
        <title>Mientras juego</title>
        <meta property='og:title=Mientras Juego' />
    </Helmet>
    <div className='text-green'>
      <h1 className='text-4xl font-bold'>Mientras juego</h1>
      <div className='font-semibold italic'>
        Videojuegos, reseñas y más
      </div>
    </div>
    <div className='mt-4'>
      <h1 className='italic font-lg'>Entradas recientes</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2 className='text-green text-semibold italic text-lg'>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.excerpt}</p>
            <Link to={node.fields.slug  } className='italic text-gray-800'>
              Leer más...
            </Link>
          </div>
        ))}
      </div>
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
          fields {
            slug
          }
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