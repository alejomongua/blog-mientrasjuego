import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './main.css'
import Navigation from './Navigation'

export class Layout extends Component {
  render() {
    return (
      <div className='mb-8'>
        <Navigation />
        <div className='container m-auto font-sans'>
          <div className='text-green'>
            <h1 className='text-4xl font-bold'>Mientras juego</h1>
            <div className='font-semibold italic'>
              Videojuegos, reseñas y más
            </div>
          </div>
          <div className='mt-4'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node))
}

export default Layout
