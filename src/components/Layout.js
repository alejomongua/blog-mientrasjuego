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
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node))
}

export default Layout
