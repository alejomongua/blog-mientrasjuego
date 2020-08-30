import React, { Component } from 'react'
import Layout from '../components/Layout'
import image404 from '../../static/404.svg'

export class Error404 extends Component {
  render() {
      return <Layout>
        <img className='m-auto' src={image404} alt="Error 404, página no encontrada" />
        Créditos:
        <a
          className='text-blue-400 underline italic'
          href='https://www.freepik.com/vectors/technology'
          target='_blank'
          rel='nofollow noreferrer'
        >Technology vector created by freepik - www.freepik.com</a>
      </Layout>
  }
}

export default Error404
