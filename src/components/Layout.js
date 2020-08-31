import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import Footer from './Footer'
import './main.css'
import background from '../../static/fondo.png'

export class Layout extends Component {
  render() {
    return (
      <div className='mb-8 bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
        <Navigation />
        <div className='container mx-auto mt-4 font-sans text-gray-900 px-4 bg-white border-2 bg-opacity-95 border-green rounded'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node))
}

export default Layout
