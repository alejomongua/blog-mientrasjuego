import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'
import moment from 'moment'

import { DEFAULT_TIME_FORMAT } from '../utils/constants'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`Mientras juego | ${post.frontmatter.title}`}</title>
        <meta property={`og:title=${post.frontmatter.title}`} />
        <meta property={`description=${post.frontmatter.excerpt}`} />
      </Helmet>
      <Layout>
        <h1 className='text-green text-bold text-4xl'>{post.frontmatter.title}</h1>
        <p className='text-sm italic'>Escrito en {moment(post.frontmatter.date).format(DEFAULT_TIME_FORMAT)}</p>
        <div className='mt-4 markdown'>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
        date
      }
    }
  }
`