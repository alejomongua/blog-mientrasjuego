import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className='font-sans flex items-center justify-between flex-wrap bg-green text-white'>
        <div className='container m-auto py-4'>
          Creado por Alejandro Mongua
        </div>
      </footer>
    )
  }
}

export default Footer
