import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className='font-sans flex items-center justify-between flex-wrap bg-green text-white mt-4 clear-both'>
        <div className='container m-auto py-4'>
          Creado por <a href='https://alejodeveloper.com' target='__blank' rel='noreferrer nofollow'>AlejoDeveloper</a>
        </div>
      </footer>
    )
  }
}

export default Footer
