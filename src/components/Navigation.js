import React, { Component } from 'react'
import logo from '../../static/mientrasjuegoW.svg'
import { Link } from 'gatsby'

export class Navigation extends Component {
  render() {
    return (
      <nav className='font-sans flex items-center justify-between flex-wrap bg-green text-xl text-white p-2 '>
        <div className='container m-auto flex'>
          <div className='items-center flex-grow mr-6'>
            <Link to='/' className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-100 mr-4  w-20'>
              <img src={logo} alt='Logo de MientrasJuego' />
            </Link>
          </div>
          <div className='w-full block lg:flex lg:items-center lg:w-auto'>
            <a
              href='https://www.youtube.com/channel/UCRS0lUQ3vG_Jr70W-cBw5Hg'
              className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-100 mr-4'
              target='_blank'
              rel='nofollow noreferrer'
            >
              Canal de youtube
            </a>
            <Link to='/acerca_de' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100'>
              Acerca de
            </Link>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation
